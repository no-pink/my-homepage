import blogPosts from '@/data/blog';
import SectionTitle from '@/components/shared/SectionTitle';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import styles from './Blog.module.css';

export default function Blog() {
  return (
    <div className="page">
      <div className="container">
        <SectionTitle title="Blog" subtitle="Thoughts, learnings & reflections" />

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span className={styles.metaItem}>
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  <a href={post.url}>{post.title}</a>
                </h3>
                <p className={styles.cardSummary}>{post.summary}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.tags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                  <a href={post.url} className={styles.readMore}>
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
