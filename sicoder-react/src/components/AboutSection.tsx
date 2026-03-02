import { useEffect, useRef, useState } from 'react';

interface StatItem {
  icon: string;
  count: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: 'fas fa-code', count: 3, suffix: '+', label: 'Projects Completed' },
  { icon: 'fas fa-heart', count: 100, suffix: '%', label: 'Client Satisfaction' },
  { icon: 'fas fa-clock', count: 1, suffix: '+', label: 'Years Learning' },
];

function StatCard({ stat }: { stat: StatItem }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setValue(Math.floor(eased * stat.count));
            if (progress < 1) requestAnimationFrame(animate);
            else setValue(stat.count);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.count]);

  return (
    <div ref={ref} className="stat-card animate-on-scroll">
      <div className="stat-icon"><i className={stat.icon}></i></div>
      <div className="stat-content">
        <h3 className="stat-number">{value}{stat.suffix}</h3>
        <p className="stat-label">{stat.label}</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section-card section-reveal">
      <div className="section-header">
        <div className="section-title">
          <span className="title-number">01</span>
          <h2>About <span className="highlight">Me</span></h2>
        </div>
        <p className="section-subtitle">Get to know more about my journey and passion</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <div className="about-intro">
            <h3>Hi, I'm <span className="gradient-text">Syifa Fauziyah Arizal</span></h3>
            <div className="accent-line"></div>
            <p className="lead-text">
              I'm a passionate front-end developer and UI designer with a focus on creating clean,
              responsive, and user-friendly web applications.
            </p>
          </div>

          <div className="about-details">
            <p>
              Turning ideas into real products through code and design.
              Always learning and sharpening my front-end skills (HTML, CSS, JavaScript, and modern frameworks).
            </p>
            <p>
              My goal is to build intuitive interfaces that enhance user experience while
              maintaining high performance and accessibility standards.
            </p>
          </div>

          <div className="stats-container">
            {stats.map((stat, i) => <StatCard key={i} stat={stat} />)}
          </div>
        </div>

        <div className="about-visual">
          <div className="floating-avatar">
            <div className="avatar-container">
              <img src="/public/assets/Syifa-Anime.png" alt="Syifa Fauziyah Arizal" className="avatar-image" />
              <div className="avatar-overlay"></div>
              <div className="tech-tags">
                {['HTML5', 'CSS3', 'JS', 'UI/UX'].map((tag, i) => (
                  <span key={tag} className="tech-tag" style={{ ['--i' as string]: i + 1 }}>{tag}</span>
                ))}
              </div>
              <div className="ring"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
