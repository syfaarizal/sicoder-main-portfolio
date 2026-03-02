import { useEffect, useRef, useState } from 'react';

const TYPING_TEXTS = [
  'Building My Own Path',
  'Front-End Developer in Progress',
  'Code. Design. Direction.',
];

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [cvOpen, setCvOpen] = useState(false);
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const type = () => {
      const current = TYPING_TEXTS[textIndexRef.current];
      const isDeleting = isDeletingRef.current;

      if (isDeleting) {
        setTypedText(current.substring(0, charIndexRef.current - 1));
        charIndexRef.current--;
      } else {
        setTypedText(current.substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndexRef.current === current.length) {
        isDeletingRef.current = true;
        speed = 1500;
      } else if (isDeleting && charIndexRef.current === 0) {
        isDeletingRef.current = false;
        textIndexRef.current = (textIndexRef.current + 1) % TYPING_TEXTS.length;
        speed = 500;
      }

      timeoutRef.current = window.setTimeout(type, speed);
    };

    const initTimer = window.setTimeout(type, 1000);
    return () => {
      clearTimeout(initTimer);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close CV dropdown on outside click
  useEffect(() => {
    if (!cvOpen) return;
    const handler = () => setCvOpen(false);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [cvOpen]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-overlay"></div>
      <div className="hero-content" style={{ width: '100%', maxWidth: 1200, zIndex: 2 }}>
        <div className="home">
          <div className="home-img">
            <div className="image-container">
              <img
                src="assets/img/logo-html-more-red-no-bg.png"
                alt="SICODER Logo"
                className="logo-3d"
              />
              <div className="hexagon-border">
                <div className="hex"></div>
                <div className="hex"></div>
                <div className="hex"></div>
              </div>
              <div className="glow-effect"></div>
            </div>
          </div>

          <div className="home-content">
            <div className="intro-text">
              <h6 className="subtitle reveal-text">Hello, I'm</h6>
              <h1 className="title reveal-text">
                Syifa <span className="gradient-text">Fauziyah Arizal</span>
              </h1>
              <div className="typing-container">
                <h3 className="typing-text">
                  I'm a <span className="typed-text">
                    {typedText}
                    <span className="typing-cursor">|</span>
                  </span>
                </h3>
              </div>
            </div>

            <p className="description fade-in">
              I don't just write code. I turn chaos into clarity—
              building interfaces, experiences, and ownership over my craft.
            </p>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/syifaarizal/" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
                <span className="hover-effect"></span>
              </a>
              <a href="https://github.com/syfaarizal" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="GitHub">
                <i className="fa-brands fa-github"></i>
                <span className="hover-effect"></span>
              </a>
              <a href="https://www.instagram.com/syfaarizal/" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="Instagram">
                <i className="fa-brands fa-instagram"></i>
                <span className="hover-effect"></span>
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="social-icon" data-tooltip="Email">
                <i className="fa-solid fa-envelope"></i>
                <span className="hover-effect"></span>
              </a>
            </div>

            <div className="hero-buttons">
              <a
                href="#contact"
                className="btn btn-primary pulse-animation"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                <span>Hire Me</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <div className="cv-dropdown">
                <a
                  href="#"
                  id="CV-btn"
                  className="btn btn-secondary"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCvOpen(p => !p); }}
                >
                  <span>Download CV</span>
                  <i className="fas fa-download"></i>
                </a>
                <div className={`cv-dropdown-content${cvOpen ? ' show' : ''}`}>
                  <a href="./assets/CV/CV-FrontEnd-Ind.pdf" className="cv-link" download onClick={() => setCvOpen(false)}>
                    <i className="fas fa-file-pdf"></i>
                    CV in Bahasa Indonesia
                  </a>
                  <a href="./assets/CV/CV-FrontEnd-Eng.pdf" className="cv-link" download onClick={() => setCvOpen(false)}>
                    <i className="fas fa-file-pdf"></i>
                    CV in English
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <div className="scroll-animation">
          <span></span><span></span><span></span>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </a>
    </section>
  );
}
