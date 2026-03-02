import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      document.body.classList.add('loaded');
      setTimeout(() => setRemoved(true), 500);
    }, 1500);

    if (document.readyState === 'complete') {
      clearTimeout(timer);
      setTimeout(() => {
        setLoaded(true);
        document.body.classList.add('loaded');
        setTimeout(() => setRemoved(true), 500);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  return (
    <div className={`loading-screen${loaded ? ' loaded' : ''}`}>
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-text">SICODER</div>
      </div>
    </div>
  );
}
