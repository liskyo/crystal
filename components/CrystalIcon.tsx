import React from 'react';

const CrystalIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-40 animate-pulse rounded-full"></div>
      
      <svg 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] filter transition-transform hover:scale-110 duration-500"
      >
        <defs>
          <linearGradient id="crystalGrad1" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="purplePink" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#d946ef" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          
          <linearGradient id="rainbow" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="20%" stopColor="#f59e0b" />
            <stop offset="40%" stopColor="#10b981" />
            <stop offset="60%" stopColor="#3b82f6" />
            <stop offset="80%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Crystal Base/Back Facets */}
        <polygon points="100,5 160,60 100,195 40,60" fill="url(#rainbow)" opacity="0.8" />
        <polygon points="100,5 160,60 100,70" fill="url(#purplePink)" opacity="0.9" />
        <polygon points="100,5 40,60 100,70" fill="url(#purplePink)" opacity="0.7" />
        
        {/* Crystal Front Facets */}
        <polygon points="100,70 160,60 100,195" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
        <polygon points="100,70 40,60 100,195" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
        <polygon points="100,5 75,65 100,70" fill="rgba(255,255,255,0.6)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
        <polygon points="100,5 125,65 100,70" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
        <polygon points="100,5 75,65 40,60" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <polygon points="100,5 125,65 160,60" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        
        {/* Main Center Reflection */}
        <polygon points="100,70 75,65 100,180" fill="url(#crystalGrad1)" />
        <polygon points="100,70 125,65 100,180" fill="url(#crystalGrad1)" opacity="0.6" />
        
        {/* Highlights */}
        <circle cx="100" cy="40" r="10" fill="#fff" filter="url(#glow)" opacity="0.8" />
        <circle cx="60" cy="65" r="4" fill="#fff" filter="url(#glow)" opacity="0.6" />
        <circle cx="140" cy="65" r="6" fill="#fff" filter="url(#glow)" opacity="0.7" />
        
        {/* Sparkles */}
        <path d="M 40 30 Q 35 30 35 25 Q 35 30 30 30 Q 35 30 35 35 Q 35 30 40 30 Z" fill="#fff" filter="url(#glow)" />
        <path d="M 160 30 Q 155 30 155 25 Q 155 30 150 30 Q 155 30 155 35 Q 155 30 160 30 Z" fill="#fff" filter="url(#glow)" />
        <path d="M 170 110 Q 167 110 167 107 Q 167 110 164 110 Q 167 110 167 113 Q 167 110 170 110 Z" fill="#fff" filter="url(#glow)" />
        <path d="M 30 110 Q 27 110 27 107 Q 27 110 24 110 Q 27 110 27 113 Q 27 110 30 110 Z" fill="#fff" filter="url(#glow)" />
      </svg>
    </div>
  );
};

export default CrystalIcon;
