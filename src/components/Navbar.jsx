import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll with custom duration and timing
      window.scrollTo({
        top: element.offsetTop - 80, // 80px offset for navbar height
        behavior: 'smooth',
        duration: 1000 // milliseconds
      });
    }
    setIsMenuOpen(false);
  };

  // For even smoother custom scrolling behavior
  const smoothScroll = (target, duration) => {
    const targetPosition = target.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smoother animation
    function ease(t, b, c, d) {
      t /= d / 2; 
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      smoothScroll(element, 1000); // 1000ms = 1 second duration
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#0B0B1E] fixed w-full top-0 z-50 border-b border-[#ffffff10]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#64CCC5]">Your Logo</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#64CCC5] hover:text-white"
            >
              {isMenuOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="md:ml-6 md:flex md:space-x-8">
              {['Home', 'Skills', 'Projects', 'Education', 'Achievements', 'Experience', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-[#64CCC5] hover:text-white px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200 cursor-none"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
          {['Home', 'Skills', 'Projects', 'Education', 'Achievements', 'Experience', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className="block w-full text-left text-[#64CCC5] hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 cursor-none"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;