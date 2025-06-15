import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // For even smoother custom scrolling behavior
 const smoothScroll = (targetId) => {
  const element = document.getElementById(targetId);
  if (element) {
    const yOffset = -80; // adjust for your fixed navbar height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }
};



  const handleNavClick = (sectionId) => {
    smoothScroll(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#0B0B1E] fixed w-full top-0 z-50 border-b border-[#ffffff10]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#64CCC5]">&lt;/&gt; MS PortFolio</span>
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
        <Scrollspy
          items={['home', 'skills', 'projects', 'education', 'achievements', 'experience', 'about']}
          currentClassName="text-white"
          offset={-100}
          className="md:ml-6 md:flex md:space-x-8"
          componentTag="div"
        >
          {['Home', 'Skills', 'Projects', 'Education', 'Achievements', 'Experience', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className="px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200 cursor-none text-[#64CCC5] hover:text-white"
            >
              {item}
            </button>
          ))}
        </Scrollspy>
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