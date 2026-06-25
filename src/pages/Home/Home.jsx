import { Link } from 'react-router-dom';
import { ArrowRight, User, Code, FolderKanban, ClipboardList, Mail } from 'lucide-react';
import profile from '@/data/profile';
import styles from './Home.module.css';

const quickLinks = [
  { path: '/about', label: '关于我', desc: '了解更多关于我的故事', icon: User, color: '#E07A5F' },
  { path: '/skills', label: '技能', desc: '查看我的技术栈', icon: Code, color: '#81B29A' },
  { path: '/projects', label: '项目', desc: '浏览我的作品集', icon: FolderKanban, color: '#7EA8BE' },
  { path: '/plan', label: '学习计划', desc: '我的学习与研究规划', icon: ClipboardList, color: '#F2CC8F' },
  { path: '/contact', label: '联系我', desc: '与我取得联系', icon: Mail, color: '#F4A6B0' },
];

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              {profile.avatar ? (
                <img src={profile.avatar} alt={profile.name} />
              ) : (
                <span className={styles.avatarPlaceholder}>
                  {profile.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
          <h1 className={styles.heroName}>{profile.name}</h1>
          <p className={styles.heroTitle}>{profile.title}</p>
          <p className={styles.heroSubtitle}>{profile.subtitle}</p>
          <div className={styles.heroActions}>
            <Link to="/about" className={styles.btnPrimary}>
              了解更多 <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className={styles.btnSecondary}>
              联系我
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className={`container ${styles.quickLinks}`}>
        <div className={styles.quickGrid}>
          {quickLinks.map(({ path, label, desc, icon: Icon, color }) => (
            <Link key={path} to={path} className={styles.quickCard}>
              <div className={styles.quickIcon} style={{ backgroundColor: `${color}18`, color }}>
                <Icon size={24} />
              </div>
              <div>
                <h3 className={styles.quickLabel}>{label}</h3>
                <p className={styles.quickDesc}>{desc}</p>
              </div>
              <ArrowRight size={16} className={styles.quickArrow} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
