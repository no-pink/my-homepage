import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, Home, User, Code, FolderKanban, Calendar, BookOpen, Mail, ClipboardList } from 'lucide-react';
import styles from './Navbar.module.css';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/skills', label: 'Skills', icon: Code },
  { path: '/projects', label: 'Projects', icon: FolderKanban },
  { path: '/plan', label: 'Study Plan', icon: ClipboardList },
  { path: '/timeline', label: 'Journey', icon: Calendar },
  { path: '/blog', label: 'Blog', icon: BookOpen },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isAdmin } = useAuth();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navInner}`}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoIcon}>✦</span>
          <span className={styles.logoText}>no-pink</span>
          {isAdmin && <span className={styles.adminDot} title="Admin mode" />}
        </NavLink>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              end={path === '/'}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.active : ''}`
              }
              end={path === '/'}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
