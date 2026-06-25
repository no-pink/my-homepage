import { useState } from 'react';
import { usePlan } from './PlanContext';
import { useAuth } from '@/context/AuthContext';
import StepList from './StepList';
import { ChevronDown, ChevronUp, Plus, Edit2, Trash2, Calendar } from 'lucide-react';
import styles from './Plan.module.css';

export default function ProjectCard({ project }) {
  const { dispatch } = usePlan();
  const { isAdmin } = useAuth();
  const [expanded, setExpanded] = useState(false);
  const [showStepInput, setShowStepInput] = useState(false);
  const [stepTitle, setStepTitle] = useState('');
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(project.title);
  const [editDesc, setEditDesc] = useState(project.description);
  const [editDeadline, setEditDeadline] = useState(project.deadline);
  const [editColor, setEditColor] = useState(project.color);

  const colors = ['#E07A5F', '#81B29A', '#7EA8BE', '#F2CC8F', '#F4A6B0', '#C5644A', '#3D405B'];

  const handleAddStep = (e) => {
    e.preventDefault();
    if (!stepTitle.trim()) return;
    dispatch({
      type: 'ADD_STEP',
      payload: { projectId: project.id, title: stepTitle.trim() },
    });
    setStepTitle('');
    setShowStepInput(false);
  };

  const handleDelete = () => {
    if (confirm(`确定删除项目「${project.title}」及其所有数据吗？此操作不可恢复。`)) {
      dispatch({ type: 'DELETE_PROJECT', payload: project.id });
    }
  };

  const handleSaveEdit = () => {
    dispatch({
      type: 'UPDATE_PROJECT',
      payload: {
        id: project.id,
        title: editTitle.trim() || project.title,
        description: editDesc,
        deadline: editDeadline,
        color: editColor,
      },
    });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className={styles.projectCard} style={{ borderLeftColor: editColor }}>
        <div className={styles.editForm}>
          <input
            className={styles.editInput}
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="项目名称"
          />
          <textarea
            className={styles.editTextarea}
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            placeholder="项目描述"
            rows={2}
          />
          <input
            type="date"
            className={styles.editInput}
            value={editDeadline}
            onChange={(e) => setEditDeadline(e.target.value)}
          />
          <div className={styles.editColors}>
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                className={`${styles.colorOption} ${editColor === c ? styles.colorActive : ''}`}
                style={{ background: c }}
                onClick={() => setEditColor(c)}
              />
            ))}
          </div>
          <div className={styles.editActions}>
            <button className={styles.cancelBtn} onClick={() => setEditing(false)}>取消</button>
            <button className={styles.confirmBtn} onClick={handleSaveEdit}>保存</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.projectCard} style={{ borderLeftColor: project.color }}>
      <div className={styles.projectHeader}>
        <div className={styles.projectTitleRow}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <span className={styles.progressBadge} style={{ background: project.color + '18', color: project.color }}>
            {project.progress}%
          </span>
        </div>
        <div className={styles.projectMeta}>
          {project.deadline && (
            <span className={styles.deadline}>
              <Calendar size={12} /> {project.deadline}
            </span>
          )}
          <span className={styles.stepCount}>{project.steps.length} 个步骤</span>
        </div>
        {project.description && (
          <p className={styles.projectDesc}>{project.description}</p>
        )}

        {/* Progress bar */}
        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${project.progress}%`, background: project.color }}
            />
          </div>
        </div>

        <div className={styles.projectActions}>
          {isAdmin && (
            <>
              <button className={styles.iconBtn} onClick={() => setShowStepInput(true)} title="添加步骤">
                <Plus size={16} /> 步骤
              </button>
              <button className={styles.iconBtn} onClick={() => setEditing(true)} title="编辑">
                <Edit2 size={14} />
              </button>
              <button className={styles.iconBtnDanger} onClick={handleDelete} title="删除">
                <Trash2 size={14} />
              </button>
            </>
          )}
          <button
            className={`${styles.iconBtn} ${styles.expandBtn}`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            {expanded ? '收起' : '展开'}
          </button>
        </div>
      </div>

      {/* Add Step Input */}
      {showStepInput && (
        <form className={styles.stepInputRow} onSubmit={handleAddStep}>
          <input
            className={styles.stepInput}
            value={stepTitle}
            onChange={(e) => setStepTitle(e.target.value)}
            placeholder="输入步骤名称，按 Enter 添加..."
            autoFocus
            onBlur={() => !stepTitle && setShowStepInput(false)}
          />
        </form>
      )}

      {/* Steps */}
      {expanded && (
        <div className={styles.stepsSection}>
          {project.steps.length === 0 ? (
            <p className={styles.emptySteps}>暂无步骤，点击上方「+ 步骤」添加</p>
          ) : (
            project.steps.map((step) => (
              <StepList
                key={step.id}
                step={step}
                projectId={project.id}
                projectColor={project.color}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
