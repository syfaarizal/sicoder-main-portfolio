import { useEffect, useRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/blog/daypost.css';

/* Sub-components */

interface CodeBlockProps {
  lang: string;
  langIcon: string;
  children: string;
}

export function CodeBlock({ lang, langIcon, children }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  function handleCopy(e: React.MouseEvent<HTMLButtonElement>) {
    const btn = e.currentTarget;
    navigator.clipboard.writeText(children.trim()).then(() => {
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('copied');
      }, 2000);
    });
  }

  return (
    <div className="day-code-block">
      <div className="day-code-header">
        <div className="day-code-title">
          <i className={langIcon}></i>
          {lang}
        </div>
        <button className="day-copy-btn" onClick={handleCopy}>
          <i className="fas fa-copy"></i> Copy
        </button>
      </div>
      <pre>
        <code ref={codeRef} className="language-js">
          {children.trim()}
        </code>
      </pre>
    </div>
  );
}

export function Output({ children }: { children: ReactNode }) {
  return <div className="day-output">{children}</div>;
}

export function HighlightBox({ children }: { children: ReactNode }) {
  return <div className="day-highlight-box">{children}</div>;
}

export function QuoteBox({ children }: { children: ReactNode }) {
  return <blockquote className="day-quote-box">{children}</blockquote>;
}

/* Scroll progress */

function useScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector('.day-scroll-bar') as HTMLElement;
    if (!bar) return;
    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = ((scrollTop / docHeight) * 100) + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
}

/* Types */

interface NavLink {
  path: string;
  title: string;
}

interface RelatedPost {
  path: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}

interface DayPostLayoutProps {
  badge: string;
  title: string;
  date: string;
  tags: string;
  readingTime: string;
  intro: string;
  githubUrl: string;
  prev: NavLink | undefined;
  next: NavLink | undefined;
  related: RelatedPost[];
  conclusion: ReactNode;
  children: ReactNode;
}

/* Main Layout */

export default function DayPostLayout({
  badge,
  title,
  date,
  tags,
  readingTime,
  intro,
  githubUrl,
  prev,
  next,
  related,
  conclusion,
  children,
}: DayPostLayoutProps) {
  useScrollProgress();

  return (
    <div className="day-post-page">
      {/* Scroll progress */}
      <div className="day-scroll-progress">
        <div className="day-scroll-bar" />
      </div>

      {/* Nav */}
      <nav className="day-header-nav">
        <div className="day-nav-container">
          <Link to="/blog" className="day-back-link">
            <i className="fas fa-arrow-left"></i>
            Back to Blog
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

          {/* Body content */}
          {children}

          {/* Footer */}
          <footer className="day-article-footer">
            <div className="day-conclusion">{conclusion}</div>
            <div style={{ textAlign: 'center' }}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="day-github-link"
              >
                <i className="fab fa-github"></i> View Source Code
              </a>
            </div>
          </footer>
        </article>

        {/* Post navigation */}
        <nav className="day-post-nav">
          {prev ? (
            <Link to={prev.path} className="day-nav-btn">
              <span className="day-nav-label">← Previous</span>
              <span className="day-nav-title">{prev.title}</span>
            </Link>
          ) : (
            <span className="day-nav-btn disabled">
              <span className="day-nav-label">← Previous</span>
              <span className="day-nav-title">No previous post</span>
            </span>
          )}

          {next ? (
            <Link to={next.path} className="day-nav-btn next">
              <span className="day-nav-label">Next →</span>
              <span className="day-nav-title">{next.title}</span>
            </Link>
          ) : (
            <span className="day-nav-btn next disabled">
              <span className="day-nav-label">Next →</span>
              <span className="day-nav-title">No next post</span>
            </span>
          )}
        </nav>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="day-related-posts">
            <h3>📚 Related Posts</h3>
            <div className="day-related-grid">
              {related.map((post) => (
                <Link key={post.path} to={post.path} className="day-related-card">
                  <div className="day-related-date">{post.date}</div>
                  <div className="day-related-title">{post.title}</div>
                  <div className="day-related-excerpt">{post.excerpt}</div>
                  <div className="day-related-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="day-tag">{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}