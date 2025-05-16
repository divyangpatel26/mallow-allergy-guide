import { useEffect, useState, useRef } from 'react';

const AutoScroll = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollAmountRef = useRef(1); // pixels per interval
  const scrollIntervalRef = useRef(20); // ms between scroll increments
  
  useEffect(() => {
    const startScrolling = () => {
      if (scrollRef.current) return; // Don't start if already running
      
      scrollRef.current = setInterval(() => {
        if (isPaused) return;
        
        const currentScrollPosition = window.scrollY;
        const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
        
        // If we're at the bottom, reset to top
        if (currentScrollPosition >= maxScrollHeight) {
          window.scrollTo({ top: 0, behavior: 'auto' }); // Jump back to top
        } else {
          // Otherwise continue scrolling down
          window.scrollBy(0, scrollAmountRef.current);
        }
      }, scrollIntervalRef.current);
    };
    
    const stopScrolling = () => {
      if (scrollRef.current) {
        clearInterval(scrollRef.current);
        scrollRef.current = null;
      }
    };
    
    // Start scrolling
    startScrolling();
    
    // Add event listeners for hover/touch
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    const handleTouchStart = () => setIsPaused(true);
    const handleTouchEnd = () => setIsPaused(false);
    
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('touchstart', handleTouchStart);
    document.body.addEventListener('touchend', handleTouchEnd);
    
    // Add more specific event listeners for any interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('touchstart', handleTouchStart);
      el.addEventListener('touchend', handleTouchEnd);
    });
    
    // Cleanup
    return () => {
      stopScrolling();
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('touchstart', handleTouchStart);
      document.body.removeEventListener('touchend', handleTouchEnd);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('touchstart', handleTouchStart);
        el.removeEventListener('touchend', handleTouchEnd);
      });
    };
  }, [isPaused]);
  
  // Create a control component that will appear fixed on the page
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      <button 
        className={`p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors ${isPaused ? 'bg-mallow-green/30' : 'bg-white/80'}`}
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
      >
        {isPaused ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        )}
      </button>
      <button
        className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
      <button
        className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        aria-label="Scroll to bottom"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default AutoScroll;
