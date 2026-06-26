import { FolderGit, Heart, KeyRound } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { isAdmin, openLogin } = useAuth();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.social}>
          <a href="https://github.com/no-pink" target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="GitHub">
            <FolderGit size={20} />
          </a>
        </div>
        <p className={styles.copy}>
          Built with <Heart size={14} className={styles.heart} /> using React + Vite &copy; {new Date().getFullYear()}
        </p>

        {/* 隐身管理入口 */}
        <button
          className={`${styles.adminEntry} ${isAdmin ? styles.adminActive : ''}`}
          onClick={openLogin}
          title="管理入口"
          aria-label="管理员入口"
        >
          <KeyRound size={14} />
        </button>
      </div>
    </footer>
  );
}
