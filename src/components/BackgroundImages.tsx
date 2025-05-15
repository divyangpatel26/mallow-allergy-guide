
import React from 'react';

const BackgroundImages = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Left side image (dandelion/floral illustration) */}
      <div 
        className="absolute bottom-0 left-0 w-1/4 h-4/5"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/92ac9b44-92cf-44c5-ba7b-d6c4465daaff.png)', 
          backgroundSize: 'contain',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8
        }}
      />
      
      {/* Right side image (floral illustration) */}
      <div 
        className="absolute bottom-0 right-0 w-1/3 h-screen"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/e8d86f97-23ee-41ca-be22-2180df37a00d.png)', 
          backgroundSize: 'contain',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8
        }}
      />
    </div>
  );
};

export default BackgroundImages;
