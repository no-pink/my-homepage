import { useState } from 'react';
import { usePlan, PlanProvider } from './PlanContext';
import { useAuth } from '@/context/AuthContext';
import ProjectCard from './ProjectCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { Plus, Download, Upload, TrendingUp, Target, CheckCircle2, Calendar } from 'lucide-react';
import styles from './Plan.module.css';

function AddProjectModal({ onClose, onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [deadline, setDeadline] = useState('');
  const [color, setColor] = useState('#E07A5F');

  const colors = ['#E07A5F', '#81B29A', '#7EA8BE', '#F2CC8F', '#F4A6B0', '#C5644A', '#3D405B'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title: title.trim(), description: desc.trim(), deadline, color });
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3>新建学习项目</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>项目名称 *</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="例如：学习 Rust" required autoFocus />
          </div>
          <div className={styles.field}>
            <label>项目描述</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="描述你的学习目标..." rows={3} />
          </div>
          <div className={styles.field}>
            <label>截止日期</label>
            <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
          </div>
          <div className={styles.field}>
            <label>颜色标签</label>
            <div className={styles.colorPicker}>
              {colors.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`${styles.colorOption} ${color === c ? styles.colorActive : ''}`}
                  style={{ background: c }}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
          </div>
          <div className={styles.modalActions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>取消</button>
            <button type="submit" className={styles.confirmBtn}>创建项目</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function PlanContent() {
  const { plans, dispatch, exportData, importData } = usePlan();
  const { isAdmin } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);

  const totalTasks = plans.reduce((sum, p) =>
    sum + p.steps.reduce((s, step) => s + step.dailyTasks.length, 0), 0
  );
  const doneTasks = plans.reduce((sum, p) =>
    sum + p.steps.reduce((s, step) => s + step.dailyTasks.filter((t) => t.done).length, 0), 0
  );
  const overallProgress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  // Upcoming tasks (today or overdue, not done)
  const today = new Date().toISOString().split('T')[0];
  const upcomingTasks = [];
  plans.forEach((p) => {
    p.steps.forEach((step) => {
      step.dailyTasks.forEach((task) => {
        if (!task.done && task.date <= today) {
          upcomingTasks.push({ ...task, projectTitle: p.title, projectColor: p.color, stepTitle: step.title });
        }
      });
    });
  });
  upcomingTasks.sort((a, b) => a.date.localeCompare(b.date));

  const handleAdd = (data) => {
    dispatch({ type: 'ADD_PROJECT', payload: data });
  };

  return (
    <div className="page">
      <div className={`container ${styles.planPage}`}>
        <div className={styles.header}>
          <SectionTitle title="学习研究计划" subtitle="规划学习路径，追踪每日进度" />
          {isAdmin && (
            <div className={styles.headerActions}>
              <button className={styles.actionBtn} onClick={exportData}>
                <Download size={16} /> 导出备份
              </button>
              <button className={styles.actionBtn} onClick={importData}>
                <Upload size={16} /> 导入恢复
              </button>
              <button className={styles.primaryBtn} onClick={() => setShowAddModal(true)}>
                <Plus size={18} /> 新建项目
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <Target size={20} style={{ color: 'var(--color-primary)' }} />
            <span className={styles.statValue}>{plans.length}</span>
            <span className={styles.statLabel}>进行中项目</span>
          </div>
          <div className={styles.statCard}>
            <CheckCircle2 size={20} style={{ color: 'var(--color-accent-green)' }} />
            <span className={styles.statValue}>{doneTasks}/{totalTasks}</span>
            <span className={styles.statLabel}>已完成任务</span>
          </div>
          <div className={styles.statCard}>
            <TrendingUp size={20} style={{ color: 'var(--color-accent-yellow)' }} />
            <span className={styles.statValue}>{overallProgress}%</span>
            <span className={styles.statLabel}>总体进度</span>
          </div>
          <div className={styles.statCard}>
            <Calendar size={20} style={{ color: 'var(--color-info)' }} />
            <span className={styles.statValue}>{upcomingTasks.length}</span>
            <span className={styles.statLabel}>待完成任务</span>
          </div>
        </div>

        {/* Upcoming Alert */}
        {upcomingTasks.length > 0 && (
          <div className={styles.upcomingSection}>
            <h3>⏰ 待完成 & 已过期任务</h3>
            <div className={styles.upcomingList}>
              {upcomingTasks.slice(0, 8).map((task) => (
                <div key={task.id} className={styles.upcomingItem}>
                  <span className={styles.upcomingDot} style={{ background: task.projectColor }} />
                  <span className={styles.upcomingTitle}>{task.title}</span>
                  <span className={styles.upcomingMeta}>{task.projectTitle} · {task.date}</span>
                </div>
              ))}
              {upcomingTasks.length > 8 && (
                <p className={styles.upcomingMore}>...还有 {upcomingTasks.length - 8} 个待完成任务</p>
              )}
            </div>
          </div>
        )}

        {/* Projects */}
        <div className={styles.projectsList}>
          {plans.length === 0 ? (
            <div className={styles.empty}>
              <p>还没有学习项目</p>
              {isAdmin && (
                <button className={styles.primaryBtn} onClick={() => setShowAddModal(true)}>
                  <Plus size={18} /> 创建第一个项目
                </button>
              )}
            </div>
          ) : (
            plans.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>

        {showAddModal && (
          <AddProjectModal
            onClose={() => setShowAddModal(false)}
            onAdd={handleAdd}
          />
        )}
      </div>
    </div>
  );
}

export default function PlanPage() {
  return (
    <PlanProvider>
      <PlanContent />
    </PlanProvider>
  );
}
