import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Main portfolio components
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import FloatingParticles from './components/FloatingParticles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import BlogSection from './components/BlogSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ToastContainer from './components/ToastContainer';
import ScrollToTop from './components/ScrollToTop';
import "./styles/blog/blog.css"

// Blog pages
import BlogIndexPage from './pages/blog/BlogIndexPage';
import { Day1Page, Day2Page, Day3Page, Day4Page, Day5Page, Day6Page } from './pages/blog/days-challenge';
import { HtmlIntroPage, HtmlIntro2Page } from './pages/blog/html-modul';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const els = document.querySelectorAll('.animate-on-scroll');
    els.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  });
}

function useRevealText() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    const els = document.querySelectorAll('.reveal-text, .section-reveal');
    els.forEach(el => observer.observe(el));

    // Fallback: reveal elements already in viewport
    const timer = setTimeout(() => {
      els.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('revealed');
        }
      });
    }, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  });
}

function PortfolioHome() {
  useScrollReveal();
  useRevealText();

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <FloatingParticles />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <BlogSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <ToastContainer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Portfolio home */}
        <Route path="/" element={<PortfolioHome />} />

        {/* Blog index */}
        <Route path="/blog" element={<BlogIndexPage />} />

        {/* Days challenge posts */}
        <Route path="/blog/days-challenge/day1" element={<Day1Page />} />
        <Route path="/blog/days-challenge/day2" element={<Day2Page />} />
        <Route path="/blog/days-challenge/day3" element={<Day3Page />} />
        <Route path="/blog/days-challenge/day4" element={<Day4Page />} />
        <Route path="/blog/days-challenge/day5" element={<Day5Page />} />
        <Route path="/blog/days-challenge/day6" element={<Day6Page />} />

        {/* HTML module posts */}
        <Route path="/blog/html-modul/html1" element={<HtmlIntroPage />} />
        <Route path="/blog/html-modul/html2" element={<HtmlIntro2Page />} />
      </Routes>
    </BrowserRouter>
  );
}
