import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import defaultPlan, { PLAN_VERSION } from '@/data/defaultPlan';

const STORAGE_KEY = 'my-home-plan-data';
const VERSION_KEY = 'my-home-plan-version';

const PlanContext = createContext(null);

// Helpers
function generateId(prefix = 'id') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function calcProgress(items) {
  if (!items || items.length === 0) return 0;
  const done = items.filter((i) => i.done || i.completed).length;
  return Math.round((done / items.length) * 100);
}

function recalcProject(project) {
  const stepsWithProgress = project.steps.map((step) => ({
    ...step,
    progress: calcProgress(step.dailyTasks),
  }));
  const overallProgress = calcProgress(stepsWithProgress.map((s) => ({ done: s.completed })));
  return { ...project, steps: stepsWithProgress, progress: overallProgress };
}

/**
 * Merge `done` statuses from old localStorage data into the new source-of-truth plan.
 * Tasks that exist in both old and new keep their old `done` value.
 * Tasks new in source start as `done: false`.
 * Steps keep their old `completed` status if matched by ID.
 */
function mergePlanData(sourcePlan, storedPlan) {
  // Build lookup of old task done status: "projectId|stepId|taskId" → done
  const oldTaskStatus = new Map();
  const oldStepStatus = new Map();
  if (storedPlan && Array.isArray(storedPlan)) {
    for (const proj of storedPlan) {
      if (proj.steps) {
        for (const step of proj.steps) {
          oldStepStatus.set(`${proj.id}|${step.id}`, step.completed);
          if (step.dailyTasks) {
            for (const task of step.dailyTasks) {
              oldTaskStatus.set(`${proj.id}|${step.id}|${task.id}`, task.done);
            }
          }
        }
      }
    }
  }

  return sourcePlan.map((proj) => ({
    ...proj,
    steps: proj.steps.map((step) => ({
      ...step,
      completed: oldStepStatus.has(`${proj.id}|${step.id}`)
        ? oldStepStatus.get(`${proj.id}|${step.id}`)
        : step.completed || false,
      dailyTasks: step.dailyTasks.map((task) => ({
        ...task,
        done: oldTaskStatus.has(`${proj.id}|${step.id}|${task.id}`)
          ? oldTaskStatus.get(`${proj.id}|${step.id}|${task.id}`)
          : task.done || false,
      })),
    })),
  }));
}

function loadData() {
  try {
    const storedVersion = localStorage.getItem(VERSION_KEY);
    const storedRaw = localStorage.getItem(STORAGE_KEY);

    // No stored data → use source directly
    if (!storedRaw) {
      return defaultPlan;
    }

    // Source and storage same version → use stored data (preserves user edits)
    if (storedVersion === String(PLAN_VERSION)) {
      return JSON.parse(storedRaw);
    }

    // Source is newer → merge done statuses into new source plan
    const stored = JSON.parse(storedRaw);
    const merged = mergePlanData(defaultPlan, stored);
    return merged;
  } catch { /* ignore */ }
  return defaultPlan;
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    localStorage.setItem(VERSION_KEY, String(PLAN_VERSION));
  } catch { /* ignore */ }
}

// Reducer
function planReducer(state, action) {
  let next;
  switch (action.type) {
    // === Project CRUD ===
    case 'ADD_PROJECT': {
      const newProject = {
        id: generateId('plan'),
        title: action.payload.title,
        description: action.payload.description || '',
        deadline: action.payload.deadline || '',
        color: action.payload.color || '#E07A5F',
        createdAt: new Date().toISOString().split('T')[0],
        steps: [],
        progress: 0,
      };
      next = [...state, newProject];
      break;
    }
    case 'UPDATE_PROJECT':
      next = state.map((p) =>
        p.id === action.payload.id ? { ...p, ...action.payload } : p
      );
      break;
    case 'DELETE_PROJECT':
      next = state.filter((p) => p.id !== action.payload);
      break;

    // === Step CRUD ===
    case 'ADD_STEP': {
      next = state.map((p) => {
        if (p.id !== action.payload.projectId) return p;
        const newStep = {
          id: generateId('step'),
          title: action.payload.title,
          completed: false,
          dailyTasks: [],
          progress: 0,
        };
        return recalcProject({ ...p, steps: [...p.steps, newStep] });
      });
      break;
    }
    case 'UPDATE_STEP':
      next = state.map((p) => {
        if (p.id !== action.payload.projectId) return p;
        const steps = p.steps.map((s) =>
          s.id === action.payload.stepId ? { ...s, ...action.payload.data } : s
        );
        return recalcProject({ ...p, steps });
      });
      break;
    case 'TOGGLE_STEP':
      next = state.map((p) => {
        if (p.id !== action.payload.projectId) return p;
        const steps = p.steps.map((s) =>
          s.id === action.payload.stepId ? { ...s, completed: !s.completed } : s
        );
        return recalcProject({ ...p, steps });
      });
      break;
    case 'DELETE_STEP':
      next = state.map((p) => {
        if (p.id !== action.payload.projectId) return p;
        return recalcProject({
          ...p,
          steps: p.steps.filter((s) => s.id !== action.payload.stepId),
        });
      });
      break;

    // === Daily Task CRUD ===
    case 'ADD_DAILY_TASK': {
      next = state.map((p) => {
        if (p.id !== action.payload.projectId) return p;
        const steps = p.steps.map((s) => {
          if (s.id !== action.payload.stepId) return s;
          const newTask = {
            id: generateId('task'),
            date: action.payload.date || new Date().toISOString().split('T')[0],
            title: action.payload.title,
            done: false,
          };
          return { ...s, dailyTasks: [...s.dailyTasks, newTask], progress: calcProgress([...s.dailyTasks, newTask]) };
        });
        return recalcProject({ ...p, steps });
      });
      break;
    }
    case 'TOGGLE_DAILY_TASK':
      next = state.map((p) => {
        if (p.id !== action.payload.projectId) return p;
        const steps = p.steps.map((s) => {
          if (s.id !== action.payload.stepId) return s;
          const tasks = s.dailyTasks.map((t) =>
            t.id === action.payload.taskId ? { ...t, done: !t.done } : t
          );
          return { ...s, dailyTasks: tasks, progress: calcProgress(tasks) };
        });
        return recalcProject({ ...p, steps });
      });
      break;
    case 'UPDATE_DAILY_TASK':
      next = state.map((p) => {
        if (p.id !== action.payload.projectId) return p;
        const steps = p.steps.map((s) => {
          if (s.id !== action.payload.stepId) return s;
          const tasks = s.dailyTasks.map((t) =>
            t.id === action.payload.taskId ? { ...t, ...action.payload.data } : t
          );
          return { ...s, dailyTasks: tasks };
        });
        return recalcProject({ ...p, steps });
      });
      break;
    case 'DELETE_DAILY_TASK':
      next = state.map((p) => {
        if (p.id !== action.payload.projectId) return p;
        const steps = p.steps.map((s) => {
          if (s.id !== action.payload.stepId) return s;
          const tasks = s.dailyTasks.filter((t) => t.id !== action.payload.taskId);
          return { ...s, dailyTasks: tasks, progress: calcProgress(tasks) };
        });
        return recalcProject({ ...p, steps });
      });
      break;

    // === Import ===
    case 'IMPORT_DATA':
      next = action.payload;
      break;

    default:
      return state;
  }
  saveData(next);
  return next;
}

export function PlanProvider({ children }) {
  const [plans, dispatch] = useReducer(planReducer, null, loadData);

  // Recalc progress on mount (in case data structure changed)
  useEffect(() => {
    const recalculated = plans.map(recalcProject);
    const same = JSON.stringify(recalculated) === JSON.stringify(plans);
    if (!same) {
      dispatch({ type: 'IMPORT_DATA', payload: recalculated });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Export
  const exportData = useCallback(() => {
    const blob = new Blob([JSON.stringify(plans, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `learning-plan-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [plans]);

  // Import
  const importData = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (Array.isArray(data)) {
            dispatch({ type: 'IMPORT_DATA', payload: data });
          }
        } catch {
          alert('Invalid file format. Please import a valid JSON backup file.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, []);

  const value = { plans, dispatch, exportData, importData };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error('usePlan must be used within PlanProvider');
  return ctx;
}
