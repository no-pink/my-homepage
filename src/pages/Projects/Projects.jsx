import { useState } from 'react';
import projects from '@/data/projects';
import SectionTitle from '@/components/shared/SectionTitle';
import { FolderGit, ExternalLink, Star } from 'lucide-react';
import styles from './Projects.module.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? projects
    : filter === 'featured'
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <div className="page">
      <div className="container">
        <SectionTitle title="项目作品" subtitle="我参与和开发的项目" />

        <div className={styles.filters}>
          {[
            { key: 'all', label: '全部' },
            { key: 'featured', label: '精选' },
          ].map(({ key, label }) => (
            <button
              key={key}
              className={`${styles.filterBtn} ${filter === key ? styles.active : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardImage}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <Star size={32} />
                  </div>
                )}
                {project.featured && (
                  <span className={styles.featuredBadge}>精选</span>
                )}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.cardActions}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionLink}>
                      <FolderGit size={16} /> 源码
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.actionLink}>
                      <ExternalLink size={16} /> 演示
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
