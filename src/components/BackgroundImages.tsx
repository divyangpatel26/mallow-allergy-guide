
import React from 'react';

const BackgroundImages = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div 
        className="absolute top-0 left-0 w-1/3 h-screen"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/21c136c1-6577-4a28-ac02-ee02eb442e54.png)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      <div 
        className="absolute top-0 right-0 w-2/3 h-screen"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/67646330-9b5d-4363-9f2f-9481dc1b4b0c.png)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
    </div>
  );
};

export default BackgroundImages;
