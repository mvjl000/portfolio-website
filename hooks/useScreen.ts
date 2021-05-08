import { useEffect, useState } from 'react';

export const useScreen = () => {
  const [isDesktopMode, setIsDesktopMode] = useState(
    typeof window !== 'undefined' && window.innerWidth > 1023
  );

  const toggleMode = () => {
    window.innerWidth > 1023 ? setIsDesktopMode(true) : setIsDesktopMode(false);
  };

  useEffect(() => {
    window.addEventListener('resize', toggleMode);

    return () => window.removeEventListener('resize', toggleMode);
  }, []);

  return { isDesktopMode };
};
