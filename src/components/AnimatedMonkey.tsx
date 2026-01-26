import { useEffect, useState } from "react";

interface AnimatedMonkeyProps {
  isPasswordFocused: boolean;
  isUsernameFocused: boolean;
}

const AnimatedMonkey = ({ isPasswordFocused, isUsernameFocused }: AnimatedMonkeyProps) => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isUsernameFocused) {
      // Look at the username field (slightly down and left)
      setEyePosition({ x: -2, y: 3 });
    } else if (!isPasswordFocused) {
      // Default position
      setEyePosition({ x: 0, y: 0 });
    }
  }, [isUsernameFocused, isPasswordFocused]);

  return (
    <div className="relative w-48 h-48 mx-auto mb-6">
      {/* Background circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary/30 shadow-warm animate-float" />
      
      {/* Face */}
      <svg
        viewBox="0 0 200 200"
        className="relative w-full h-full"
        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
      >
        {/* Ears */}
        <ellipse cx="30" cy="100" rx="25" ry="28" fill="#c9a86c" />
        <ellipse cx="30" cy="100" rx="15" ry="18" fill="#f5d5b8" />
        <ellipse cx="170" cy="100" rx="25" ry="28" fill="#c9a86c" />
        <ellipse cx="170" cy="100" rx="15" ry="18" fill="#f5d5b8" />
        
        {/* Head */}
        <ellipse cx="100" cy="100" rx="70" ry="75" fill="#c9a86c" />
        
        {/* Face area */}
        <ellipse cx="100" cy="115" rx="50" ry="45" fill="#f5d5b8" />
        
        {/* Eye whites */}
        <g className={`transition-all duration-300 ${isPasswordFocused ? 'opacity-0' : 'opacity-100'}`}>
          <ellipse cx="70" cy="85" rx="18" ry="20" fill="white" />
          <ellipse cx="130" cy="85" rx="18" ry="20" fill="white" />
          
          {/* Pupils */}
          <g style={{ transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)` }} className="transition-transform duration-200">
            <circle cx="73" cy="88" r="8" fill="#2d1810" />
            <circle cx="133" cy="88" r="8" fill="#2d1810" />
            {/* Eye shine */}
            <circle cx="76" cy="85" r="3" fill="white" />
            <circle cx="136" cy="85" r="3" fill="white" />
          </g>
        </g>
        
        {/* Closed eyes (when password focused) */}
        <g className={`transition-all duration-300 ${isPasswordFocused ? 'opacity-100' : 'opacity-0'}`}>
          <path d="M 55 85 Q 70 95 85 85" stroke="#2d1810" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 115 85 Q 130 95 145 85" stroke="#2d1810" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
        
        {/* Eyebrows */}
        <path 
          d={isUsernameFocused ? "M 52 65 Q 70 58 88 65" : "M 52 68 Q 70 62 88 68"} 
          stroke="#8b6914" 
          strokeWidth="4" 
          fill="none" 
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path 
          d={isUsernameFocused ? "M 112 65 Q 130 58 148 65" : "M 112 68 Q 130 62 148 68"} 
          stroke="#8b6914" 
          strokeWidth="4" 
          fill="none" 
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        
        {/* Nose */}
        <ellipse cx="100" cy="115" rx="12" ry="8" fill="#c9a86c" />
        <circle cx="94" cy="115" r="4" fill="#2d1810" />
        <circle cx="106" cy="115" r="4" fill="#2d1810" />
        
        {/* Mouth */}
        <path 
          d={isPasswordFocused ? "M 80 140 Q 100 145 120 140" : "M 80 140 Q 100 155 120 140"} 
          stroke="#2d1810" 
          strokeWidth="3" 
          fill="none" 
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        
        {/* Hands covering eyes (when password focused) */}
        <g className={`transition-all duration-500 ${isPasswordFocused ? 'opacity-100' : 'opacity-0'}`}>
          {/* Left hand */}
          <g style={{ 
            transform: isPasswordFocused ? 'translateY(0)' : 'translateY(80px)',
            transition: 'transform 0.4s ease-out'
          }}>
            <ellipse cx="60" cy="85" rx="25" ry="22" fill="#c9a86c" />
            {/* Fingers */}
            <ellipse cx="45" cy="75" rx="8" ry="12" fill="#c9a86c" />
            <ellipse cx="55" cy="68" rx="7" ry="14" fill="#c9a86c" />
            <ellipse cx="67" cy="65" rx="7" ry="15" fill="#c9a86c" />
            <ellipse cx="78" cy="70" rx="6" ry="12" fill="#c9a86c" />
          </g>
          
          {/* Right hand */}
          <g style={{ 
            transform: isPasswordFocused ? 'translateY(0)' : 'translateY(80px)',
            transition: 'transform 0.4s ease-out 0.05s'
          }}>
            <ellipse cx="140" cy="85" rx="25" ry="22" fill="#c9a86c" />
            {/* Fingers */}
            <ellipse cx="155" cy="75" rx="8" ry="12" fill="#c9a86c" />
            <ellipse cx="145" cy="68" rx="7" ry="14" fill="#c9a86c" />
            <ellipse cx="133" cy="65" rx="7" ry="15" fill="#c9a86c" />
            <ellipse cx="122" cy="70" rx="6" ry="12" fill="#c9a86c" />
          </g>
        </g>
      </svg>
      
      {/* Blush circles */}
      <div className={`absolute left-8 top-24 w-6 h-4 rounded-full bg-primary/30 transition-opacity duration-300 ${isUsernameFocused ? 'opacity-100' : 'opacity-60'}`} />
      <div className={`absolute right-8 top-24 w-6 h-4 rounded-full bg-primary/30 transition-opacity duration-300 ${isUsernameFocused ? 'opacity-100' : 'opacity-60'}`} />
    </div>
  );
};

export default AnimatedMonkey;