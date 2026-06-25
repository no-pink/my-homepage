import profile from '@/data/profile';
import SectionTitle from '@/components/shared/SectionTitle';
import { MapPin, Mail } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className="page">
      <div className="container">
        <SectionTitle title="关于我" subtitle="了解我的故事与热爱" />

        <div className={styles.content}>
          <div className={styles.avatarCol}>
            <div className={styles.avatar}>
              {profile.avatar ? (
                <img src={profile.avatar} alt={profile.name} />
              ) : (
                <span className={styles.avatarPlaceholder}>
                  {profile.name.charAt(0)}
                </span>
              )}
            </div>
            <h3 className={styles.name}>{profile.name}</h3>
            <p className={styles.title}>{profile.title}</p>
            <div className={styles.infoList}>
              <span className={styles.info}>
                <MapPin size={14} /> {profile.location}
              </span>
              <a href={`mailto:${profile.email}`} className={styles.info}>
                <Mail size={14} /> {profile.email}
              </a>
            </div>
          </div>

          <div className={styles.bioCol}>
            {profile.bio.split('\n\n').map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
