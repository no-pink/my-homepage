import { usePlan } from './PlanContext';
import { useAuth } from '@/context/AuthContext';
import { Check, Trash2 } from 'lucide-react';
import styles from './Plan.module.css';

export default function DailyTask({ task, projectId, stepId, projectColor }) {
  const { dispatch } = usePlan();
  const { isAdmin } = useAuth();

  const handleToggle = () => {
    if (!isAdmin) return;
    dispatch({
      type: 'TOGGLE_DAILY_TASK',
      payload: { projectId, stepId, taskId: task.id },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_DAILY_TASK',
      payload: { projectId, stepId, taskId: task.id },
    });
  };

  const isOverdue = !task.done && task.date < new Date().toISOString().split('T')[0];

  return (
    <div className={`${styles.taskItem} ${task.done ? styles.taskDone : ''} ${isOverdue ? styles.taskOverdue : ''}`}>
      <button
        className={`${styles.checkCircleSm} ${task.done ? styles.checkedSm : ''} ${!isAdmin ? styles.disabled : ''}`}
        onClick={handleToggle}
        disabled={!isAdmin}
        style={{
          borderColor: task.done ? projectColor : undefined,
          background: task.done ? projectColor : undefined,
          cursor: isAdmin ? 'pointer' : 'default',
        }}
      >
        {task.done && <Check size={10} color="#fff" />}
      </button>
      <span className={`${styles.taskTitle} ${task.done ? styles.taskTitleDone : ''}`}>
        {task.title}
      </span>
      <span className={`${styles.taskDate} ${isOverdue ? styles.overdueDate : ''}`}>
        {task.date}
        {isOverdue && ' ⚠'}
      </span>
      {isAdmin && (
        <button className={styles.taskDelete} onClick={handleDelete} title="删除任务">
          <Trash2 size={12} />
        </button>
      )}
    </div>
  );
}
