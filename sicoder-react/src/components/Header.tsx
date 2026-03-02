import { useState, useEffect } from 'react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#blog', label: 'Blog' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active nav via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.15, rootMargin: '-100px 0px -100px 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.body.style.overflow = '';
    const target = document.querySelector(href);
    if (target) {
      const headerH = document.querySelector('.header')?.clientHeight || 0;
      window.scrollTo({ top: (target as HTMLElement).offsetTop - headerH - 20, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <a href="https://sicoder.netlify.app/" className="logo">
          SICO<span>DER</span> .
        </a>

        <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu} aria-expanded={menuOpen}>
          <div className={`hamburger${menuOpen ? ' active' : ''}`}>
            <span></span><span></span><span></span>
          </div>
        </div>

        <nav className={`nav-menu${menuOpen ? ' active' : ''}`}>
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${activeSection === item.href.slice(1) ? ' active' : ''}`}
              data-text={item.label}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
            >
              {item.label}
            </a>
          ))}
          <div className="nav-indicator"></div>
        </nav>

        <div className="theme-toggle">
          <input
            type="checkbox"
            id="theme-switch"
            className="theme-switch"
            checked={theme === 'light'}
            onChange={onToggleTheme}
          />
          <label htmlFor="theme-switch" className="theme-label">
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
            <span className="theme-ball"></span>
          </label>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 99 }}
          onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
        />
      )}
    </>
  );
}
