import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      // Check if window is available (for SSR compatibility)
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      console.warn('ScrollToTop error:', error);
      // Fallback to instant scroll
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
