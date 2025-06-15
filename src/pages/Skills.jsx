import React, { useState, useEffect } from 'react';
import { colors } from './../components/colors';
import Divider from './../components/GradeintDivider';
const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skillsData = {
    frontend: [ 
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' }
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },  
      { name: 'AWS', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' }
    ]
  };

  const getPositions = (count, radius) => {
    const positions = [];
    const adjustedRadius = isMobile ? radius * 0.4 : radius;
    const spread = Math.PI; // Use Math.PI for half circle
    
    for (let i = 0; i < count; i++) {
      const angle = (spread / (count - 1)) * i;
      const x = Math.cos(angle) * adjustedRadius;
      const y = Math.sin(angle) * adjustedRadius;
      positions.push({ x, y });
    }
    return positions;
  };

  return (
    <div className="bg-[#0B0B1E]   text-white px-4 overflow-hidden flex flex-col items-center justify-start" >
      
      {/* Half Circles */}
      <div className="relative flex justify-center items-end mt-[250px] md:mt-[450px] mb-16">
        {/* Frontend - Largest */}
          <div className={`absolute bottom-0 ${isMobile ? 'w-[320px] h-[160px]' : 'w-[800px] h-[400px]'} 
                    border-t-2 border-purple-500/80 rounded-t-full`}>
        {skillsData.frontend.map((skill, index) => {
            const positions = getPositions(skillsData.frontend.length, 390);
            return (
                <div
                    key={index}
                    className="absolute"
                    style={{
                        left: `calc(50% + ${positions[index].x}px)`,
                        bottom: `${positions[index].y}px`,
                        transform: 'translate(-50%, 50%)'
                    }}
                >
                    <div className={`${isMobile ? 'w-8 h-8' : 'w-16 h-16'} 
                                    bg-white rounded-full p-2 shadow-md
                                    hover:bg-gray-800`}>
                        <img src={skill.icon} alt={skill.name} className="w-full h-full" />
                    </div>
                </div>
            );
        })}
    </div>

        {/* Backend - Middle */}
        <div className={`absolute bottom-0 ${isMobile ? 'w-[240px] h-[120px]' : 'w-[600px] h-[300px]'} 
                        border-t-2 border-blue-500/80 rounded-t-full`}>
          {skillsData.backend.map((skill, index) => {
            const positions = getPositions(skillsData.backend.length, 300);
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `calc(50% + ${positions[index].x}px)`,
                  bottom: `${positions[index].y}px`,
                  transform: 'translate(-50%, 50%)'
                }}
              >
          <div className={`${isMobile ? 'w-8 h-8' : 'w-16 h-16'} 
                          bg-white rounded-full p-2 shadow-md
                          hover:bg-gray-800`}>
                  <img src={skill.icon} alt={skill.name} className="w-full h-full" />
                </div>
      
              </div>
            );
          })}
        </div>

        {/* Tools - Smallest */}
        <div className={`absolute bottom-0 ${isMobile ? 'w-[160px] h-[80px]' : 'w-[400px] h-[200px]'} 
                        border-t-2 border-green-500/80 rounded-t-full`}>
          {skillsData.tools.map((skill, index) => {
            const positions = getPositions(skillsData.tools.length, 190);
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `calc(50% + ${positions[index].x}px)`,
                  bottom: `${positions[index].y}px`,
                  transform: 'translate(-50%, 50%)'
                }}
              >
              <div className={`${isMobile ? 'w-8 h-8' : 'w-16 h-16'} 
                bg-white rounded-full p-2 shadow-md
                hover:bg-gray-800`}>      
                  <img src={skill.icon} alt={skill.name} className="w-full h-full" />
                </div>
              
              </div>
            );
          })}
        </div>
      </div>

      {/* My Skills Text Centered Below */}
      <div className="text-center mb-2">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-[#64CCC5]">
            Expertice In
          </span>
        </h1>
        <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto">
          Crafting digital experiences with modern technologies
        </p>
      </div>
      <Divider/>
    </div>
  );
};

export default Skills;
