import { useState } from 'react';
import { usePlan } from './PlanContext';
import { useAuth } from '@/context/AuthContext';
import DailyTask from './DailyTask';
import { Check, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Plan.module.css';

export default function StepList({ step, projectId, projectColor }) {
  const { dispatch } = usePlan();
  const { isAdmin } = useAuth();
  const [expanded, setExpanded] = useState(true);
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState(new Date().toISOString().split('T')[0]);

  const handleToggle = () => {
    if (!isAdmin) return;
    dispatch({ type: 'TOGGLE_STEP', payload: { projectId, stepId: step.id } });
  };

  const handleDelete = () => {
    if (confirm(`Delete step "${step.title}"?`)) {
      dispatch({ type: 'DELETE_STEP', payload: { projectId, stepId: step.id } });
    }
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;
    dispatch({
      type: 'ADD_DAILY_TASK',
      payload: { projectId, stepId: step.id, title: taskTitle.trim(), date: taskDate },
    });
    setTaskTitle('');
    setShowTaskInput(false);
  };

  const completedTasks = step.dailyTasks.filter((t) => t.done).length;
  const totalTasks = step.dailyTasks.length;

  return (
    <div className={`${styles.stepCard} ${step.completed ? styles.stepCompleted : ''}`}>
      <div className={styles.stepHeader}>
        <button
          className={`${styles.checkCircle} ${step.completed ? styles.checked : ''} ${!isAdmin ? styles.disabled : ''}`}
          onClick={handleToggle}
          disabled={!isAdmin}
          style={{ borderColor: step.completed ? projectColor : undefined, cursor: isAdmin ? 'pointer' : 'default' }}
        >
          {step.completed && <Check size={12} style={{ color: projectColor }} />}
        </button>
        <div className={styles.stepInfo} onClick={() => setExpanded(!expanded)}>
          <h4 className={`${styles.stepTitle} ${step.completed ? styles.stepTitleDone : ''}`}>
            {step.title}
          </h4>
          {totalTasks > 0 && (
            <span className={styles.stepTaskCount}>
              {completedTasks}/{totalTasks} tasks done
            </span>
          )}
        </div>
        <div className={styles.stepActions}>
          {isAdmin && (
            <>
              <button className={styles.iconBtnSm} onClick={() => setShowTaskInput(true)} title="Add daily task">
                <Plus size={14} />
              </button>
              <button className={styles.iconBtnSmDanger} onClick={handleDelete} title="Delete step">
                <Trash2 size={13} />
              </button>
            </>
          )}
          <button className={styles.iconBtnSm} onClick={() => setExpanded(!expanded)}>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {/* Step Progress */}
      {totalTasks > 0 && (
        <div className={styles.stepProgress} style={{ margin: '0 0 var(--space-sm) 36px' }}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${step.progress}%`, background: projectColor }}
            />
          </div>
        </div>
      )}

      {/* Add Task Input */}
      {showTaskInput && (
        <form className={styles.taskInputRow} onSubmit={handleAddTask}>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className={styles.taskDateInput}
          />
          <input
            className={styles.taskTitleInput}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Daily task name..."
            autoFocus
            onBlur={() => !taskTitle && setShowTaskInput(false)}
          />
        </form>
      )}

      {/* Daily Tasks */}
      {expanded && (
        <div className={styles.tasksList}>
          {step.dailyTasks.length === 0 ? (
            <p className={styles.emptyTasks}>No daily tasks yet</p>
          ) : (
            step.dailyTasks.map((task) => (
              <DailyTask
                key={task.id}
                task={task}
                projectId={projectId}
                stepId={step.id}
                projectColor={projectColor}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
