import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AuthContext = createContext(null);

const STORAGE_KEY = 'my-home-admin-auth';

// SHA-256 哈希值，不是明文密码
// 修改密码：在浏览器控制台执行 hashPassword('你的新密码') 得到哈希后替换下面这行
const PASSWORD_HASH = '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9';

/**
 * 使用浏览器内置 Web Crypto API 做 SHA-256 哈希
 * 密码明文不会出现在 JS 代码中
 */
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'true') setIsAdmin(true);
    } catch { /* ignore */ }
  }, []);

  const login = useCallback(async (password) => {
    const hash = await hashPassword(password);
    if (hash === PASSWORD_HASH) {
      setIsAdmin(true);
      localStorage.setItem(STORAGE_KEY, 'true');
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAdmin(false);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const openLogin = useCallback(() => setShowLogin(true), []);
  const closeLogin = useCallback(() => setShowLogin(false), []);

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, showLogin, openLogin, closeLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
