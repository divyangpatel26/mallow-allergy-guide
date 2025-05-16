
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const ScrollButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  
  // Monitor scroll position to show/hide scroll up button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollUp(scrollPosition > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Scroll down function
  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + 500,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="fixed right-4 bottom-20 z-20 flex flex-col gap-2">
      {showScrollUp && (
        <Button 
          onClick={scrollToTop}
          size="icon"
          variant="secondary"
          className="rounded-full shadow-md hover:bg-accent bg-white/90 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </Button>
      )}
      <Button 
        onClick={scrollDown}
        size="icon"
        variant="secondary"
        className="rounded-full shadow-md hover:bg-accent bg-white/90 backdrop-blur-sm"
        aria-label="Scroll down"
      >
        <ChevronDown size={20} />
      </Button>
    </div>
  );
};

export default ScrollButtons;
