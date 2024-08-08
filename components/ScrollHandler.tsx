"use client";

import { useEffect, useRef } from 'react';

const ScrollHandler: React.FC = () => {
  const howItsWorkRef = useRef<HTMLDivElement>(null);

  const scrollToHowItsWork = () => {
    const element = document.getElementById('how-its-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && howItsWorkRef.current) {
      scrollToHowItsWork();
    }
  }, []);

  return <div ref={howItsWorkRef} />;
};

export default ScrollHandler;
