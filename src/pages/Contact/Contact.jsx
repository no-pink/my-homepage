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
        <SectionTitle title="Get in Touch" subtitle="I'd love to connect" />

        <div className={styles.content}>
          <div className={styles.infoCard}>
            <h3>Contact Info</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <MapPin size={18} />
                </div>
                <div>
                  <p className={styles.infoLabel}>Location</p>
                  <p className={styles.infoValue}>{profile.location}</p>
                </div>
              </div>
              {profile.email && (
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Email</p>
                    <a href={`mailto:${profile.email}`} className={styles.infoValue}>{profile.email}</a>
                  </div>
                </div>
              )}
            </div>

            {profile.socialLinks.length > 0 && (
              <div className={styles.socialLinks}>
                <h4>Social</h4>
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
