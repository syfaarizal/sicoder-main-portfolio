import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/blog.css';

interface RelatedPost {
  path: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}

interface NavPost {
  path: string;
  title: string;
}

interface DayPostLayoutProps {
  badge: string;
  title: string;
  date: string;
  tags: string;
  readingTime: string;
  intro: string;
  githubUrl: string;
  conclusion: React.ReactNode;
  prev?: NavPost;
  next?: NavPost;
  related?: RelatedPost[];
  children: React.ReactNode;
}

export default function DayPostLayout({
  badge,
  title,
  date,
  tags,
  readingTime,
  intro,
  githubUrl,
  conclusion,
  prev,
  next,
  related = [],
  children,
}: DayPostLayoutProps) {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(height > 0 ? (top / height) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="day-post-page">
      {/* Scroll progress */}
      <div className="day-scroll-progress">
        <div className="day-scroll-bar" style={{ width: `${scrollPct}%` }} />
      </div>

      {/* Nav */}
      <nav className="day-header-nav">
        <div className="day-nav-container">
          <Link to="/blog" className="day-back-link">
            <i className="fas fa-arrow-left"></i>
            Kembali ke Blog
          </Link>
          <div className="day-reading-time">
            <i className="fas fa-clock"></i>
            <span>{readingTime}</span>
          </div>
        </div>
      </nav>

      <div className="day-container">
        <article className="day-post-article">
          {/* Header */}
          <header className="day-article-header">
            <div className="day-challenge-badge">{badge}</div>
            <h1>{title}</h1>
            <div className="day-article-meta">
              <div className="day-meta-item">
                <i className="fas fa-calendar"></i>
                <span>{date}</span>
              </div>
              <div className="day-meta-item">
                <i className="fas fa-tags"></i>
                <span>{tags}</span>
              </div>
              <div className="day-meta-item">
                <i className="fas fa-user"></i>
                <span>Syifa Fauziyah Arizal</span>
              </div>
            </div>
            <div className="day-article-intro">{intro}</div>
          </header>

          {/* Body content (passed as children) */}
          {children}

          {/* Footer */}
          <footer className="day-article-footer">
            <div className="day-conclusion">{conclusion}</div>
            <div style={{ textAlign: 'center' }}>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="day-github-link">
                <i className="fab fa-github"></i>
                View Source Code
              </a>
            </div>
          </footer>
        </article>

        {/* Post Navigation */}
        <nav className="day-post-nav">
          {prev ? (
            <Link to={prev.path} className="day-nav-btn">
              <span className="day-nav-label">← Previous</span>
              <span className="day-nav-title">{prev.title}</span>
            </Link>
          ) : (
            <div className="day-nav-btn disabled">
              <span className="day-nav-label">← Previous</span>
              <span className="day-nav-title">No previous post</span>
            </div>
          )}
          {next ? (
            <Link to={next.path} className="day-nav-btn next">
              <span className="day-nav-label">Next →</span>
              <span className="day-nav-title">{next.title}</span>
            </Link>
          ) : (
            <div className="day-nav-btn next disabled">
              <span className="day-nav-label">Next →</span>
              <span className="day-nav-title">No next post</span>
            </div>
          )}
        </nav>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="day-related-posts">
            <h3>📚 Related Posts</h3>
            <div className="day-related-grid">
              {related.map(r => (
                <Link key={r.path} to={r.path} className="day-related-card">
                  <div className="day-related-date">{r.date}</div>
                  <div className="day-related-title">{r.title}</div>
                  <div className="day-related-excerpt">{r.excerpt}</div>
                  <div className="day-related-tags">
                    {r.tags.map(t => <span key={t} className="day-tag">{t}</span>)}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Logo sticky */}
      <div className="blog-logo-sticky">
        <Link to="/">
          <img src="/assets/img/sicoder-logo.png" alt="SICODER Logo" />
        </Link>
      </div>
    </div>
  );
}

export function CodeBlock({
  lang = 'JavaScript',
  langIcon = 'fab fa-js',
  children,
}: {
  lang?: string;
  langIcon?: string;
  children: string;
}) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    const text = codeRef.current?.textContent || '';
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="day-code-block">
      <div className="day-code-header">
        <div className="day-code-title">
          <i className={langIcon}></i>
          {lang}
        </div>
        <button className={`day-copy-btn${copied ? ' copied' : ''}`} onClick={handleCopy}>
          <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre><code ref={codeRef}>{children}</code></pre>
    </div>
  );
}

export function Output({ children }: { children: React.ReactNode }) {
  return <div className="day-output">{children}</div>;
}

export function HighlightBox({ children }: { children: React.ReactNode }) {
  return <div className="day-highlight-box">{children}</div>;
}

export function QuoteBox({ children }: { children: React.ReactNode }) {
  return <blockquote className="day-quote-box">{children}</blockquote>;
}