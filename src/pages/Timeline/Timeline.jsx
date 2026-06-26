import timeline from '@/data/timeline';
import SectionTitle from '@/components/shared/SectionTitle';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import styles from './Timeline.module.css';

const typeConfig = {
  work: { icon: Briefcase, label: 'Experience', color: '#E07A5F' },
  education: { icon: GraduationCap, label: 'Education', color: '#81B29A' },
};

export default function TimelinePage() {
  return (
    <div className="page">
      <div className="container">
        <SectionTitle title="Journey" subtitle="My growth trajectory" />

        <div className={styles.timeline}>
          {timeline.map((section) => {
            const config = typeConfig[section.type];
            const Icon = config.icon;
            return (
              <div key={section.type} className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon} style={{ color: config.color, background: `${config.color}15` }}>
                    <Icon size={20} />
                  </div>
                  <h3>{section.title || config.label}</h3>
                </div>

                <div className={styles.items}>
                  {section.items.map((item, idx) => (
                    <div key={item.id} className={styles.item}>
                      <div className={styles.line}>
                        <div className={styles.dot} style={{ borderColor: config.color }} />
                        {idx < section.items.length - 1 && (
                          <div className={styles.connector} />
                        )}
                      </div>
                      <div className={styles.card}>
                        <div className={styles.cardHeader}>
                          <h4 className={styles.cardTitle}>{item.title}</h4>
                          <span className={styles.cardOrg}>{item.organization}</span>
                        </div>
                        <span className={styles.date}>
                          <Calendar size={12} /> {item.date}
                        </span>
                        <p className={styles.cardDesc}>{item.description}</p>
                        {item.tags.length > 0 && (
                          <div className={styles.tags}>
                            {item.tags.map((tag) => (
                              <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                          </div>
                        )}
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
