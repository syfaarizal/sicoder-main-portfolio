import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useToast } from './hooks/useToast';
import { useAnimateOnScroll } from './hooks/useScrollReveal';

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

// Initialize section-reveal IntersectionObserver globally
function useSectionReveal() {
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { toasts, showToast, removeToast } = useToast();

  useSectionReveal();
  useAnimateOnScroll();

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <FloatingParticles />

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <BlogSection />
        <ProjectsSection />
        <ContactSection showToast={showToast} />
      </main>

      <Footer showToast={showToast} />
      <BackToTop />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
}
