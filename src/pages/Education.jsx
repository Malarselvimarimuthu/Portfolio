import React from 'react';
import { FaGraduationCap, FaSchool, FaUserGraduate } from 'react-icons/fa';
import './Education.css'
import Divider from './../components/GradeintDivider';

const Education = () => {
  const educationData = [
    {
      year: "2022 - 2026",
      degree: "Bachelor of Engineering",
      major: "Computer Science & Engineering (CGPA: 8.40)",
      institution: "Kongu Engineering College",
      description: "Currently pursuing a degree with a focus on software development and cloud computing.",
      mainSubjects: [
        "Web Development",
        "Database Management",
        "Data Structures",
        "Computer Networks",
        "Cloud Computing",
        "Operating Systems",
        "DevOps"
      ],
      icon: <FaUserGraduate className="w-full h-full" />
    },
    {
      year: "2020 - 2022",
      degree: "Higher Secondary Education",
      major: "Computer Science (96%)",
      institution: "Akshaya Academy Matric Higher Secondary School",
      description: "Specialized in Computer Science with Mathematics",
      mainSubjects: [
        "Computer Science",
        "Mathematics",
        "Physics",
        "Chemistry",
       
      ],
      icon: <FaGraduationCap className="w-full h-full" />
    },
    {
      year: "2019 - 2020",
      degree: "Secondary Secondary Education",
      major: "(99.6%)",
      institution: "Akshaya Academy Matric Higher Secondary School",
      description: "Focused on wide range of basic education",
      mainSubjects: [
        "Tamil",
        "English",
        "Mathematics",
        "Science",
        "Social Science",
        
      ],
     icon: <FaSchool className="w-full h-full" />
    },

  ];


return (
    <div className="min-h-screen bg-[#0B0B1E] text-white py-20 px-4 md:px-8">
      {/* Header */}
      
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#64CCC5]">
          Education Journey
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
        The classroom chapters that wrote my career story
        </p>
      </div>

      {/* Timeline for Desktop / Cards for Mobile */}
      <div className="max-w-7xl mx-auto">
        {educationData.map((education, index) => (
          <div key={index} className="relative mb-8">
            {/* Timeline elements - Only visible on desktop */}
            <div className="hidden md:block">
              <div className="absolute left-0 sm:left-16 h-full w-[3px] bg-[#64CCC5]/30"/>
              <div className="absolute left-[-24px] sm:left-8 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 
                            rounded-full bg-[#0B0B1E] border-4 border-[#64CCC5] z-10">
                <div className="text-[#64CCC5] w-8 h-8 md:w-10 md:h-10">
                  {education.icon}
                </div>
              </div>
            </div>

            {/* Content Card */}

            <div className={`bg-[#111132] rounded-2xl p-6 md:p-12 border border-[#64CCC5]/20 
                            hover:border-[#64CCC5] transition-all duration-500
                            hover:shadow-2xl hover:shadow-[#64CCC5]/10
                            hover:scale-105
                            ${index !== 0 ? 'mt-8' : ''} 
                            md:ml-40`}>
              {/* Mobile Icon - Only visible on mobile */}
              <div className="flex md:hidden items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 
                              rounded-full bg-[#0B0B1E] border-2 border-[#64CCC5]">
                  <div className="text-[#64CCC5] w-6 h-6">
                    {education.icon}
                  </div>
                </div>
                <span className="text-[#64CCC5] font-semibold">{education.year}</span>
              </div>

              {/* Year Badge - Only visible on desktop */}
              <div className="hidden md:block absolute right-4 top-4 bg-[#1A1A47] px-4 py-2 rounded-full">
                <span className="text-[#64CCC5] font-semibold">{education.year}</span>
              </div>

              {/* Main Content */}
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {education.degree}
              </h3>
              <h4 className="text-[#64CCC5] text-lg md:text-2xl font-semibold mb-4">
                {education.major}
              </h4>
              <h5 className="text-lg md:text-xl text-purple-400 mb-6">
                {education.institution}
              </h5>
              <p className="text-gray-300 text-base md:text-lg mb-8">
                {education.description}
              </p>

              {/* Main Subjects */}
              <div className="mt-6 md:mt-8">
                <h6 className="text-[#64CCC5] font-semibold mb-4">Major Subjects</h6>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {education.mainSubjects.map((subject, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1A1A47] rounded-full text-sm md:text-base text-white
                               hover:bg-[#64CCC5]/20 transition-colors duration-300"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Divider/>
    </div>
);
};

export default Education;