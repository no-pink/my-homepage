import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Lock, Eye, EyeOff, LogOut } from 'lucide-react';
import styles from './LoginModal.module.css';

export default function LoginModal() {
  const { isAdmin, login, logout, showLogin, closeLogin } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showLogin && inputRef.current) {
      inputRef.current.focus();
      setPassword('');
      setError('');
    }
  }, [showLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;
    const ok = await login(password.trim());
    if (ok) {
      closeLogin();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (!showLogin) return null;

  return (
    <div className={styles.overlay} onClick={closeLogin}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {isAdmin ? (
          // Logged in — show admin panel
          <div className={styles.adminPanel}>
            <div className={styles.adminBadge}>
              <span className={styles.adminDot} />
              Admin Mode Active
            </div>
            <p className={styles.adminHint}>
              You can now edit the study plan and manage project content. Visitors won't see these editing controls.
            </p>
            <button className={styles.logoutBtn} onClick={() => { logout(); closeLogin(); }}>
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        ) : (
          // Not logged in — password input
          <>
            <div className={styles.iconWrap}>
              <Lock size={24} />
            </div>
            <h3 className={styles.title}>Admin Login</h3>
            <p className={styles.hint}>Enter password to unlock editing</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputRow}>
                <input
                  ref={inputRef}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="Enter password"
                  className={error ? styles.inputError : ''}
                />
                <button
                  type="button"
                  className={styles.togglePwd}
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {error && <p className={styles.error}>{error}</p>}
              <div className={styles.actions}>
                <button type="button" className={styles.cancelBtn} onClick={closeLogin}>Cancel</button>
                <button type="submit" className={styles.confirmBtn}>Login</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
