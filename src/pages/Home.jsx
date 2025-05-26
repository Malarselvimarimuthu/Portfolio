import './Home.css';
import profileImage from '../images/PassportImage1.jpg';
import { useState, useEffect } from 'react';
import Divider from './../components/GradeintDivider';

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const messages = ["Hi There!", "I'm Malarselvi"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % messages.length;
      const fullText = messages[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, messages]);

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About Me' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'profile', label: 'Profile' },
    { id: 'story', label: 'Story' },
    { id: 'internship', label: 'Internship' }
  ];
  
  const beliefs = [
    "✨ Continuous learning",
    "🚀 Building robust backend systems",
    "☁️ Cloud-first thinking",
    "🎭 Express through public speaking",
    "🎶 Code with rhythm, live with melody",
    "😊 Keeping a positive attitude"
  ];
  
  return (
    
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-screen">
        {/* Top Animated Text */}
        <div className="absolute w-full text-center top-10 md:top-20 z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {text}
            <span className="animate-blink">|</span>
          </h1>
        </div>

            {/* Flowing Circle */}
            {[...Array(3)].map((_, index) => (
            <div
                key={index}
                className="absolute rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
                style={{
                width: `${window.innerWidth < 768 ? '350px' : '400px'}`,
                height: `${window.innerWidth < 768 ? '350px' : '400px'}`,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'linear-gradient(45deg, transparent, rgba(98, 0, 255, 0.3), rgba(0, 183, 255, 0.3), transparent)',
                animation: `flowAndFade 6s linear infinite ${index * 2}s`,
                }}
            />
            ))}

            {/* Glowing Center with Image */}
            <div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-64 h-64 md:w-72 md:h-72 rounded-full transition-all duration-300 z-10"
            style={{
                background: 'linear-gradient(45deg, #2a0845, #6441A5)',
                boxShadow: '0 0 50px rgba(138, 43, 226, 0.5)',
            }}
            >
            <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
            />
            </div>

        {/* Bottom Text Content */}
        <div className="absolute w-full text-center bottom-20 md:bottom-10 z-10 px-4">
       
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Full Stack Developer | Cloud Enthusiast
          </h2>
          <div className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            <p className="mb-2">
              Interested in exploring DevOps and Cloud Technologies
             
            </p>
            
          </div>
          
        </div>
        
      </div>
            
    </div>
    
  );
}