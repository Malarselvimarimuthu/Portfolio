import React from 'react';
import { FaAws, FaCode, FaCalendar, FaBuilding, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import Divider from './../components/GradeintDivider';
import aws from '../images/aws.png';

const ProfessionalDevelopment = () => {
  const professionalData = {
    internship: {
      title: "Web Developer Intern",
      company: "Dr.Syringe Branding and Consultancies",
      duration: "March 2024 - June 2024",
      description: "Worked on developing and maintaining web applications using modern technologies and best practices.",
      technologies: ["React with TypeScript", "Redux", "MySQL", "Java", "SpringBoot"],
      keyAchievements: [
        "Developed responsive web applications with React and TypeScript",
        "Implemented RESTful APIs using SpringBoot",
        "Collaborated with senior developers on production projects",
        "Lead the team for a month during internship"
      ]
    },
    certification: {
      title: "AWS Certified Cloud Practitioner",
      issueDate: "February 15, 2025",
      validUntil: "February 15, 2028",
      credentialId: "AWS04746422",
      skills: [
        "Cloud Computing Concepts",
        "AWS Core Services",
        "Security and Compliance",
        "Pricing and Billing",
        "Cloud Architecture Basics"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B1E] text-white py-20 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#64CCC5]">
          Professional Development
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Building expertise through practical experience and industry certifications
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        
        {/* Internship Card */}
        <div className="bg-[#111132] rounded-2xl p-8 border border-[#64CCC5]/20 
                    hover:border-[#64CCC5] transition-all duration-500
                    hover:shadow-2xl hover:shadow-[#64CCC5]/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#64CCC5]/10 rounded-xl">
              <FaCode className="w-8 h-8 text-[#64CCC5]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Web Development</h3>
              <p className="text-[#64CCC5]">Internship Experience</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <FaBuilding className="text-[#64CCC5]" />
              <span>{professionalData.internship.company}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaCalendar className="text-[#64CCC5]" />
              <span>{professionalData.internship.duration}</span>
            </div>
          </div>

          <p className="mt-6 text-gray-300">
            {professionalData.internship.description}
          </p>

          {/* Technologies */}
          <div className="mt-6">
            <h4 className="text-[#64CCC5] font-semibold mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {professionalData.internship.technologies.map((tech, index) => (
                <span key={index} 
                      className="px-3 py-1 bg-[#64CCC5]/10 rounded-full text-sm text-[#64CCC5]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-6">
            <h4 className="text-[#64CCC5] font-semibold mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {professionalData.internship.keyAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#64CCC5]" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certification Card */}
        <div className="bg-[#111132] rounded-2xl p-8 border border-[#64CCC5]/20 
                    hover:border-[#64CCC5] transition-all duration-500
                    hover:shadow-2xl hover:shadow-[#64CCC5]/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#64CCC5]/10 rounded-xl">
              <FaAws className="w-8 h-8 text-[#64CCC5]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">AWS Certification</h3>
              <p className="text-[#64CCC5]">Cloud Practitioner</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <FaCertificate className="text-[#64CCC5]" />
              <span>Credential ID: {professionalData.certification.credentialId}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaCalendar className="text-[#64CCC5]" />
              <span>Valid: {professionalData.certification.issueDate} - {professionalData.certification.validUntil}</span>
            </div>
          </div>

          {/* Verify Button */}
          <a
            href="https://www.credly.com/badges/ac1fd57c-700d-4e47-92ef-69f3650105a5" // <-- Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-4 py-2 flex items-center gap-2 text-sm
                      bg-[#64CCC5]/10 rounded-full text-[#64CCC5] 
                      hover:bg-[#64CCC5]/20 transition-colors"
          >
            <FaExternalLinkAlt size={12} />
            Verify Certification
          </a>

          {/* Skills */}
          <div className="mt-6">
            <h4 className="text-[#64CCC5] font-semibold mb-3">Areas of Expertise</h4>
            <ul className="space-y-2">
              {professionalData.certification.skills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#64CCC5]" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AWS Badge */}
          <div className="mt-6 flex justify-center">
            <img 
              src={aws}
              alt="AWS Certification Badge" 
              className="w-102 h-102 object-contain"
            />
          </div>
        </div>

      </div>
      <Divider/>
    </div>
  );
};

export default ProfessionalDevelopment;