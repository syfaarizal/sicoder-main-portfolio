import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogIndexPosts } from '../../data/blogIndexData';
import { BlogIndexPost } from '../../types';
import '../../styles/blog.css';

type FilterCategory = 'all' | 'challenge' | 'css' | 'javascript';

const CATEGORY_LABELS: Record<FilterCategory, string> = {
  all: 'All Posts',
  challenge: 'JS Challenge',
  css: 'CSS Module',
  javascript: 'JavaScript',
};

export default function BlogIndexPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const searchRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === searchRef.current) {
        setSearch('');
        searchRef.current?.blur();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Filter logic
  const filtered = blogIndexPosts.filter(post => {
    const matchCat = activeFilter === 'all' || post.category === activeFilter;
    const q = search.toLowerCase().trim();
    const matchSearch = !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some(t => t.includes(q));
    return matchCat && matchSearch;
  });

  // Group by category for display
  const grouped: Record<string, { label: string; labelSpan: string; posts: BlogIndexPost[] }> = {};

  if (activeFilter === 'all' && !search) {
    grouped['challenge'] = { label: 'Days ', labelSpan: 'Challenge', posts: [] };
    grouped['css'] = { label: 'CS', labelSpan: 'S', posts: [] };
    grouped['javascript'] = { label: 'Java', labelSpan: 'Script', posts: [] };
    filtered.forEach(p => grouped[p.category]?.posts.push(p));
  } else {
    grouped['results'] = { label: 'Search ', labelSpan: 'Results', posts: filtered };
  }

  const totalPosts = blogIndexPosts.length;

  return (
    <div className="blog-index-page">
      {/* Particles */}
      <Particles />

      {/* Back to portfolio */}
      <div className="blog-back-btn">
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
          Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <div className="blog-index-header-wrap">
        <div className="blog-index-header">
          <h1>SICODER <span>Blog</span></h1>
          <p>A personal learning journal — documenting my journey through front-end development, one challenge at a time.</p>
        </div>

        {/* Stats */}
        <div className="blog-stats">
          <div className="blog-stat-item">
            <span className="blog-stat-number">{totalPosts}</span>
            <span className="blog-stat-label">Total Posts</span>
          </div>
          <div className="blog-stat-item">
            <span className="blog-stat-number">30</span>
            <span className="blog-stat-label">Days Learning</span>
          </div>
          <div className="blog-stat-item">
            <span className="blog-stat-number">3</span>
            <span className="blog-stat-label">Current Streak</span>
          </div>
          <div className="blog-stat-item">
            <span className="blog-stat-number">3</span>
            <span className="blog-stat-label">Categories</span>
          </div>
        </div>

        {/* Controls */}
        <div className="blog-controls">
          <div className="blog-search-wrap">
            <i className="fas fa-search blog-search-icon"></i>
            <input
              ref={searchRef}
              type="text"
              className="blog-search-input"
              placeholder="Search posts... (Ctrl+K)"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="blog-filter-tags">
            {(Object.keys(CATEGORY_LABELS) as FilterCategory[]).map(f => (
              <button
                key={f}
                className={`blog-filter-tag${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {CATEGORY_LABELS[f]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Sections */}
      {Object.values(grouped).every(g => g.posts.length === 0) ? (
        <div className="blog-no-results">
          <i className="fas fa-search"></i>
          <h3>No posts found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        Object.entries(grouped).map(([key, group]) =>
          group.posts.length > 0 ? (
            <section key={key} className="blog-section-group">
              <div className="blog-section-group-header">
                <h2>{group.label}<span>{group.labelSpan}</span></h2>
              </div>
              <div className="blog-cards-grid">
                {group.posts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          ) : null
        )
      )}

      {/* Footer */}
      <footer className="blog-index-footer">
        <p>&copy; 2026 SICODER. Blog | Personal Learning Journey</p>
        <p>Front-end development &amp; UI design insights</p>
        <div className="blog-footer-links">
          <Link to="/">Portfolio</Link>
          <a href="mailto:syfaarizal@gmail.com">Contact</a>
          <a href="https://github.com/syfaarizal" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>

      {/* Logo sticky */}
      <div className="blog-logo-sticky">
        <Link to="/">
          <img src="/assets/img/sicoder-logo.png" alt="SICODER Logo" />
        </Link>
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: BlogIndexPost }) {
  return (
    <Link to={post.path} className="blog-index-card">
      <div className="blog-card-header-row">
        <span className="blog-card-date">{post.date}</span>
        <span className="blog-card-badge">{post.badge}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="blog-card-footer-row">
        <span className="blog-read-more">
          Read more <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </Link>
  );
}

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 20 + Math.random() * 10,
  }));

  return (
    <div className="blog-particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="blog-particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
