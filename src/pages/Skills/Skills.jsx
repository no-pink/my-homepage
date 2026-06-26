import skills from '@/data/skills';
import SectionTitle from '@/components/shared/SectionTitle';
import { Code, Server, Wrench, Users } from 'lucide-react';
import styles from './Skills.module.css';

const iconMap = {
  code: Code,
  server: Server,
  tool: Wrench,
  users: Users,
};

export default function Skills() {
  return (
    <div className="page">
      <div className="container">
        <SectionTitle title="Skills & Expertise" subtitle="Technical stack and core competencies" />

        <div className={styles.grid}>
          {skills.categories.map((category) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <div key={category.name} className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                </div>
                <div className={styles.skillsList}>
                  {category.items.map((skill) => (
                    <div key={skill.name} className={styles.skillItem}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progressFill}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
