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
      setError('密码错误，请重试');
      setPassword('');
    }
  };

  if (!showLogin) return null;

  return (
    <div className={styles.overlay} onClick={closeLogin}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {isAdmin ? (
          // 已登录状态 - 显示退出
          <div className={styles.adminPanel}>
            <div className={styles.adminBadge}>
              <span className={styles.adminDot} />
              管理员模式已开启
            </div>
            <p className={styles.adminHint}>
              你现在可以编辑学习计划、管理项目内容。访客不会看到这些编辑功能。
            </p>
            <button className={styles.logoutBtn} onClick={() => { logout(); closeLogin(); }}>
              <LogOut size={16} /> 退出管理
            </button>
          </div>
        ) : (
          // 未登录 - 密码输入
          <>
            <div className={styles.iconWrap}>
              <Lock size={24} />
            </div>
            <h3 className={styles.title}>管理员登录</h3>
            <p className={styles.hint}>输入密码解锁编辑功能</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputRow}>
                <input
                  ref={inputRef}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="请输入密码"
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
                <button type="button" className={styles.cancelBtn} onClick={closeLogin}>取消</button>
                <button type="submit" className={styles.confirmBtn}>登录</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
