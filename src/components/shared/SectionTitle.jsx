import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.divider}>
        <span className={styles.dividerDot}></span>
        <span className={styles.dividerLine}></span>
        <span className={styles.dividerDot}></span>
      </div>
    </div>
  );
}
