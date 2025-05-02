import React from 'react';
import './Projects.css';
const Projects = () => {
  const projects = [
    {
      title: "Project Name",
      description: "Brief project description here...",
      longDescription: "This is a detailed description of the project that will be revealed on hover. It can contain multiple lines of text explaining the project's purpose, challenges, and solutions implemented.",
      image: "/project-image.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://project-demo.com",
      githubLink: "https://github.com/username/project",
      features: [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3"
      ]
    },
    {
      title: "Project Name",
      description: "Brief project description here...",
      longDescription: "This is a detailed description of the project that will be revealed on hover. It can contain multiple lines of text explaining the project's purpose, challenges, and solutions implemented.",
      image: "/project-image.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://project-demo.com",
      githubLink: "https://github.com/username/project",
      features: [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3"
      ]
    },
    {
      title: "Project Name",
      description: "Brief project description here...",
      longDescription: "This is a detailed description of the project that will be revealed on hover. It can contain multiple lines of text explaining the project's purpose, challenges, and solutions implemented.",
      image: "/project-image.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://project-demo.com",
      githubLink: "https://github.com/username/project",
      features: [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3"
      ]
    },
    {
      title: "Project Name",
      description: "Brief project description here...",
      longDescription: "This is a detailed description of the project that will be revealed on hover. It can contain multiple lines of text explaining the project's purpose, challenges, and solutions implemented.",
      image: "/project-image.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://project-demo.com",
      githubLink: "https://github.com/username/project",
      features: [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3"
      ]
    },
    // Add more projects...
  ];

  return (
    <div className="min-h-screen bg-[#0B0B1E] text-white px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-[#64CCC5]">
            My Projects
          </span>
        </h1>
        <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto">
          Showcasing my journey through code
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {projects.map((project, index) => (
    <div 
      key={index} 
      className="group relative bg-gray-800/50 rounded-xl overflow-hidden 
                 transition-all duration-300 transform 
                 hover:shadow-xl hover:shadow-purple-500/20
                 animate-shake" // Added shake animation
    >
      {/* Front of Card */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 
                     transition-colors z-10"
          >
            Live Demo
          </a>
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 
                     transition-colors z-10"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Description Overlay (Zoom Effect) */}
                <div className="absolute inset-0 bg-gray-800 flex items-center 
                            justify-center p-6 opacity-0 
                            group-hover:opacity-100 backface-hidden
                            transition-all duration-500 ease-in-out
                            transform group-hover:scale-100 scale-0">
            <div className="text-white text-center">
                <h4 className="text-xl font-bold mb-4 text-blue-400">Project Details</h4>
                <p className="text-gray-100 mb-4">{project.longDescription}</p>
                
                {/* Features List */}
                <div className="mt-4">
                <h5 className="font-bold mb-2 text-purple-400">Key Features:</h5>
                <ul className="list-disc list-inside text-gray-100 text-left">
                    {project.features.map((feature, i) => (
                    <li key={i} className="mb-1">{feature}</li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
            </div>
  ))}
  </div></div>
  );
};

export default Projects;