import { useState } from 'react';
import { projects } from '../data';
import { Project } from '../types';

type Filter = 'all' | Project['category'];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="project" className="section-card section-reveal">
      <div className="section-header">
        <div className="section-title">
          <span className="title-number">04</span>
          <h2>My <span className="highlight">Projects</span></h2>
        </div>
        <p className="section-subtitle">These are the projects where I learn and grow by building</p>
      </div>

      <div className="projects-filter">
        {(['all', 'web', 'personal'] as Filter[]).map(f => (
          <button
            key={f}
            className={`filter-btn${activeFilter === f ? ' active' : ''}`}
            data-filter={f}
            onClick={() => setActiveFilter(f)}
          >
            {f === 'all' ? 'All Projects' : f === 'web' ? 'Web Development' : 'Personal'}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project, i) => (
          <div key={i} className="project-card animate-on-scroll" data-category={project.category}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-content">
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.demo} className="project-link project-link-primary" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                  <span>Live Demo</span>
                </a>
                <a href={project.code} className="project-link project-link-secondary" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-footer">
        <a
          href="https://syfaarizal.github.io/sicoder-main-portfolio/projects/indexprojects.html"
          className="btn btn-outline"
          target="_blank" rel="noopener noreferrer"
        >
          <span>View All Projects</span>
          <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </section>
  );
}
