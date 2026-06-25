import { useState } from 'react';
import profile from '@/data/profile';
import SectionTitle from '@/components/shared/SectionTitle';
import { Mail, MapPin, FolderGit, Send, Link2, Check } from 'lucide-react';
import styles from './Contact.module.css';

const socialIcons = {
  github: FolderGit,
  linkedin: Link2,
  twitter: Send,
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="page">
      <div className="container">
        <SectionTitle title="联系我" subtitle="期待与你交流" />

        <div className={styles.content}>
          <div className={styles.infoCol}>
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

              <div className={styles.socialLinks}>
                <h4>社交媒体</h4>
                <div className={styles.socialList}>
                  {profile.socialLinks.map(({ name, url, icon }) => {
                    const Icon = socialIcons[icon] || Github;
                    return (
                      <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Icon size={18} />
                        <span>{name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">姓名</label>
                <input
                  id="name"
                  type="text"
                  placeholder="你的名字"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">邮箱</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">留言</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="你想对我说的话..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className={`${styles.submitBtn} ${submitted ? styles.submitted : ''}`}>
                {submitted ? (
                  <>
                    <Check size={18} /> 已发送
                  </>
                ) : (
                  <>
                    <Send size={16} /> 发送消息
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
