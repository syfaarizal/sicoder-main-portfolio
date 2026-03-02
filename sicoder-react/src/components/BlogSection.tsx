import { useState, useEffect, useCallback } from 'react';
import { blogPosts } from '../data';

function getSlidesPerView() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1200) return 2;
  return 3;
}

export default function BlogSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);

  const totalSlides = Math.ceil(blogPosts.length / slidesPerView);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : 0));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : totalSlides - 1));
  }, [totalSlides]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [prevSlide, nextSlide]);

  // Resize
  useEffect(() => {
    const handler = () => {
      const newSpv = getSlidesPerView();
      setSlidesPerView(newSpv);
      setCurrentSlide(0);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const cardWidth = `calc(${100 / slidesPerView}% - ${(slidesPerView - 1) * 2}rem / ${slidesPerView})`;
  const translateX = currentSlide === 0 ? 0 : -(currentSlide * (100 / slidesPerView));

  return (
    <section id="blog" className="section-card section-reveal">
      <div className="section-header">
        <div className="section-title">
          <span className="title-number">03</span>
          <h2>My <span className="highlight">Blog</span></h2>
        </div>
        <p className="section-subtitle">My blog in learning, building and growing</p>
      </div>

      <div className="blog-header">
        <h3 className="blog-section-title">Challenges <span className="gradient-text">Day-By-Day</span></h3>
        <div className="decorative-line"></div>
      </div>

      <div className="blog-carousel-container">
        <div className="blog-carousel">
          <div
            className="blog-track"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: 'transform 0.5s ease',
            }}
          >
            {blogPosts.map((post, i) => (
              <div
                key={i}
                className="blog-card animate-on-scroll"
                style={{ flex: `0 0 ${cardWidth}` }}
              >
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h4 className="blog-title">{post.title}</h4>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href={post.link} className="read-more">
                    <span>Read More</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous slide">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="carousel-dots">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                className={`carousel-dot${i === currentSlide ? ' active' : ''}`}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next slide">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="section-footer">
        <a href="./blog/indexblog.html" className="btn btn-outline">
          <span>View All Blog Posts</span>
          <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </section>
  );
}
