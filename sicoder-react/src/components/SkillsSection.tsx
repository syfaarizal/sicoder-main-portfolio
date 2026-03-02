import { useState, useEffect, useRef } from 'react';
import { skills } from '../data';
import { Skill } from '../types';

type Filter = 'all' | Skill['category'];

interface TabItem { label: string; filter: Filter; icon: string; }

const tabs: TabItem[] = [
  { label: 'All Skills', filter: 'all', icon: 'fas fa-layer-group' },
  { label: 'Technical', filter: 'technical', icon: 'fas fa-code' },
  { label: 'Design', filter: 'design', icon: 'fas fa-paint-brush' },
  { label: 'Soft Skills', filter: 'soft', icon: 'fas fa-users' },
  { label: 'Tools', filter: 'tools', icon: 'fas fa-tools' },
];

function SkillCard({ skill }: { skill: Skill }) {
  const [progress, setProgress] = useState(0);
  const [displayVal, setDisplayVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    animated.current = false;
    setProgress(0);
    setDisplayVal(0);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();
          const duration = 1000;
          const animate = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const v = Math.floor(p * skill.level);
            setProgress(v);
            setDisplayVal(v);
            if (p < 1) requestAnimationFrame(animate);
            else { setProgress(skill.level); setDisplayVal(skill.level); }
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [skill.level, skill.name]);

  return (
    <div ref={ref} className="skill-item animate-on-scroll">
      <div className="skill-header">
        <div className="skill-icon"><i className={skill.icon}></i></div>
        <div className="skill-info">
          <h3 className="skill-name">{skill.name}</h3>
          <p className="skill-desc">{skill.desc}</p>
        </div>
      </div>
      <div className="skill-level">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-text">
          <span className="progress-value">{displayVal}%</span>
          <span className="progress-label">Proficiency</span>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = activeFilter === 'all' ? skills : skills.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="section-card section-reveal">
      <div className="section-header">
        <div className="section-title">
          <span className="title-number">02</span>
          <h2>My <span className="highlight">Skills</span></h2>
        </div>
        <p className="section-subtitle">Skills I've Sharpened So Far</p>
      </div>

      <div className="skill-tabs">
        {tabs.map(tab => (
          <button
            key={tab.filter}
            className={`skill-tab${activeFilter === tab.filter ? ' active' : ''}`}
            data-filter={tab.filter}
            onClick={() => setActiveFilter(tab.filter)}
          >
            <i className={tab.icon}></i>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="skills-grid" id="skills-container">
        {filtered.map((skill, i) => <SkillCard key={`${skill.name}-${i}`} skill={skill} />)}
      </div>
    </section>
  );
}
