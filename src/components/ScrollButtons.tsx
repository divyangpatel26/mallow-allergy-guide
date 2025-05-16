
import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const ScrollButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show buttons after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={cn(
      "fixed bottom-8 right-8 flex flex-col gap-2 z-50 transition-opacity duration-300",
      isVisible ? "opacity-100" : "opacity-0"
    )}>
      <Button 
        onClick={scrollToTop}
        size="icon"
        className="bg-mallow-green hover:bg-mallow-green/90 text-green-800 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </Button>
      <Button 
        onClick={scrollToBottom}
        size="icon"
        className="bg-mallow-gold hover:bg-mallow-gold/90 text-amber-800 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Scroll to bottom"
      >
        <ArrowDown size={20} />
      </Button>
    </div>
  );
};

export default ScrollButtons;
