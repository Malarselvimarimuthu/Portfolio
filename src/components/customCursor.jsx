// components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150);

      // Create bubbles
      const newBubbles = [];
      for (let i = 0; i < 4; i++) {
        newBubbles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / 4
        });
      }
      setBubbles([...bubbles, ...newBubbles]);

      // Remove bubbles after animation
      setTimeout(() => {
        setBubbles(prev => prev.filter(b => !newBubbles.includes(b)));
      }, 1000);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('click', handleClick);

    return () => {
      document.addEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('click', handleClick);
    };
  }, [bubbles]);

  return (
    <>
    {/* Main cursor */}
    <div
      className="fixed w-6 h-6 rounded-full border-2 border-[#64CCC5] pointer-events-none z-[999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isClicked ? 0.8 : 1})`,
      }}
    >
      <div className="absolute inset-1 rounded-full bg-[#64CCC5] opacity-30"></div>
    </div>

    {/* Bubble effects */}
    {bubbles.map(bubble => (
      <div
        key={bubble.id}
        className="fixed w-3 h-3 rounded-full bg-[#64CCC5] pointer-events-none z-[999] animate-bubble opacity-70"
        style={{
          left: bubble.x,
          top: bubble.y,
          transform: `translate(-50%, -50%) translate(
            ${Math.cos(bubble.angle) * 20}px,
            ${Math.sin(bubble.angle) * 20}px
          )`,
        }}
      />
    ))}
  </>
  );
};

export default CustomCursor;