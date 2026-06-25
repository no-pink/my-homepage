import profile from '@/data/profile';
import SectionTitle from '@/components/shared/SectionTitle';
import { Mail, MapPin, FolderGit, Send, Link2 } from 'lucide-react';
import styles from './Contact.module.css';

const socialIcons = {
  github: FolderGit,
  linkedin: Link2,
  twitter: Send,
};

export default function Contact() {
  return (
    <div className="page">
      <div className="container">
        <SectionTitle title="联系我" subtitle="期待与你交流" />

        <div className={styles.content}>
          <div className={styles.infoCard}>
            <h3>联系方式</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <MapPin size={18} />
                </div>
                <div>
                  <p className={styles.infoLabel}>所在地</p>
                  <p className={styles.infoValue}>{profile.location}</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Mail size={18} />
                </div>
                <div>
                  <p className={styles.infoLabel}>邮箱</p>
                  <a href={`mailto:${profile.email}`} className={styles.infoValue}>{profile.email}</a>
                </div>
              </div>
            </div>

            {profile.socialLinks.length > 0 && (
              <div className={styles.socialLinks}>
                <h4>社交媒体</h4>
                <div className={styles.socialList}>
                  {profile.socialLinks.map(({ name, url, icon }) => {
                    const Icon = socialIcons[icon] || FolderGit;
                    return (
                      <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Icon size={18} />
                        <span>{name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
