import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import './Achievements.css'
import codingPrize1 from '../images/CodingPrize1.jpg';
import speech from '../images/speach.JPG';
import poem from '../images/poem.jpg';
import Divider from './../components/GradeintDivider';

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const achievements = [
    {
      id: 1,
      title: "Code Bidding",
      image: codingPrize1,
      date: "Mar/2025",
      description: "Won first place in Coding event  with problem solving skills.The event is conducted by the Cloud User Group (CUG), our college's premier technical community.",
      category: "Technical",
      points: [
        "Conquered challenging coding problems with optimal solutions",
        "Demonstrated proficiency in Java programming",
        "Implemented strategic approaches under time pressure",
        "Focussed in Problem Solving and Critical thinking"
      ]
    },
    {
      id: 2,
      title: "Self-Defense Event Organizer & Speaker",
      image:speech,
      date: "2024",
      description: " As Club Coordinator of the Karate and Martial Arts Club, delivered a powerful opening address that set an inspiring tone for the event. ",
      category: "Leadership & Public Speaking",
      points: [
        "Managed event flow and real-time logistics as lead coordinator",
        "Captivated audience with compelling opening address",
        "Facilitated Q&A sessions addressing real-world safety concerns"
      ]
    },
    {
      id: 3,
      title: "Women's Day Poetry",
      image:poem,
      date: "Mar/2025",
      description: " Composed and shared an impactful poem celebrating women's strength and dignity on International Women's Day.Explore few lines in below with me...",
      category: "Creative Writing",
      points: [
        "\"Everyone has the same potential, it's true\"",
        "\"Proven by hardwork and persistence too. \"",
        "\"No matters what gender speaks! \"",
        "\"Its about how society seeks! \"",
        // "\"Respect comes from perfect\"",
        // "\"Not just from gender - right?\"",
        // "\"Power of male - may wind\"",
        // "\"Strength of female lies in mind\"",
        // "\"Women may sharpen their muscle too, \"",
        // "\"Focus and good in all they do! \"",
    ]
    },
    // ... your other achievements
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="min-h-screen bg-[#0B0B1E] text-white py-10 md:py-20">
      {/* Header */}
      <div className="text-center mb-12 md:mb-24 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-8 text-[#64CCC5]">
        Exploring Excellence &  Achieving Dreams
        </h1>
        <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
          Milestones that mark my journey
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        <div className="relative" {...handlers}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 px-2 md:px-12"
            >
              {/* Left Circle */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0">
                <motion.div 
                  className="w-full h-full rounded-full overflow-hidden
                            border-4 border-[#64CCC5] shadow-lg shadow-[#64CCC5]/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={achievements[currentIndex].image} 
                    alt={achievements[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Circle Decoration */}
                <div className="absolute -inset-4 border-2 border-dashed border-[#64CCC5]/30 rounded-full animate-spin-slow"/>
              </div>

              {/* Right Content */}
              <div className="flex-1 w-full md:w-auto mt-8 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-[#111132] rounded-2xl p-6 md:p-8 border border-[#64CCC5]/20"
                >
                  {/* Category Badge */}
                  <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#64CCC5]/20 text-[#64CCC5] text-sm">
                    {achievements[currentIndex].category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mt-4 md:mt-6 mb-2 md:mb-4">
                    {achievements[currentIndex].title}
                  </h3>

                  {/* Date */}
                  <p className="text-[#64CCC5] text-base md:text-lg mb-4 md:mb-6">
                    {achievements[currentIndex].date}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-lg mb-6 md:mb-8">
                    {achievements[currentIndex].description}
                  </p>

                  {/* Achievement Points */}
                  <ul className="space-y-2 md:space-y-3">
                    {achievements[currentIndex].points.map((point, index) => (
                      <li key={index} className="flex items-center gap-2 md:gap-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#64CCC5]"/>
                        <span className="text-gray-300 text-sm md:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between 
                        left-0 right-0 px-2 md:px-0">
            <button
              onClick={() => {
                prevSlide();
                setIsAutoPlaying(false);
              }}
              className="transform -translate-x-2 md:-translate-x-6 p-2 md:p-3 rounded-full 
                       bg-[#111132] border border-[#64CCC5]/20 
                       text-[#64CCC5] hover:bg-[#64CCC5]/20 transition-colors
                       shadow-lg hover:scale-110 z-10"
            >
              <FaChevronLeft size={16} className="md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => {
                nextSlide();
                setIsAutoPlaying(false);
              }}
              className="transform translate-x-2 md:translate-x-6 p-2 md:p-3 rounded-full 
                       bg-[#111132] border border-[#64CCC5]/20 
                       text-[#64CCC5] hover:bg-[#64CCC5]/20 transition-colors
                       shadow-lg hover:scale-110 z-10"
            >
              <FaChevronRight size={16} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 
                        ${currentIndex === index 
                          ? 'bg-[#64CCC5] w-6 md:w-8' 
                          : 'bg-[#64CCC5]/20'}`}
            />
          ))}
        </div>
      </div>
      <Divider/>
    </div>
  );
};

export default Achievements;