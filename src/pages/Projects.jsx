import React from 'react';
import './Projects.css';
import Divider from './../components/GradeintDivider';
import Project1 from './../images/project1.png';
import Project2 from './../images/project2.png';
import Project3 from './../images/project3.png';
import Project4 from './../images/project4.png';
import Project5 from './../images/project5.jpg';
import Project6 from './../images/project6.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description: "A full-stack Movie Web that allows users to search and explore movie information",
     
      image:Project1,
      technologies: ["React","Tailwind CSS","TMDB API", "Node.js","Express Js", "MongoDB"],
      
      githubLink: "https://github.com/Malarselvimarimuthu/movie-web",
      features: [
        "Watch official movie trailers",
        "Add and manage favorite movies",
        "Give and Preview movie feedbacks ",
        "Filter movies by name,language,actor,genre"
      ] 
    },
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform for customers and admins, built with React and Firebase.",
      image: Project2,
      technologies: ["React (TSX)", "Tailwind CSS", "Firebase","Lottie Icons"],
      liveLink: "https://firstpick-database-b30a7.web.app/",
      githubLink: "https://github.com/Malarselvimarimuthu/firstpick-project",
      features: [
        "User Module: Signup, Login, Profile, and Order History",
        "Product Module: Product listing, view, and filters",
        "Order Module: Cart, billing, and order confirmation",
        "Admin Panel: Manage products, categories, inventory, and users"
      ]
    },
    {
      title: "Notes Maker",
      description: "A simple and intuitive web application to create, edit, and manage your personal notes effectively. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
      image: Project3,
      technologies: ["React.js","Tailwind CSS", "Node.js","Express.js","JWT Token", "MongoDB"],
      githubLink: "https://github.com/Malarselvimarimuthu/NotesMaker",
      features: [
        "Create, edit,delete notes and Pin important notes ",
        "User authentication (Sign up/Login)",
        "Organize notes with tags",
        "Search functionality to quickly find notes"
      ]
    },
    {
      title: "PhotoStudio Portfolio",
      description: "This is a static website for a photography studio agency. The GitHub repository is integrated using Poll SCM, enabling Jenkins to automatically detect changes and trigger builds.",
      image:Project4,
      technologies: ["HTML", "CSS", "JavaScript","Jenkins","Github","DevOps"],
      githubLink: "https://github.com/Malarselvimarimuthu/photoHd",
      features: [
        "Responsive layout that adapts to different screen sizes and devices",
        "Footer section with social media icons and links",
        "CI/CD pipeline setup using Jenkins",
        "GitHub repository integrated with Jenkins via Poll SCM for automatic deployment"
      ]
    },
    {
      title: "Chat Room – Client to Client Communication",
      description: "A multithreaded chat room application built using Python socket programming for real-time communication over TCP.",
      image:Project5,
      technologies: ["Python", "Socket Programming", "Multithreading", "Computer Networks"],
      githubLink: "https://github.com/Malarselvimarimuthu/CNProjectGroupChat",
      features: [
        "Real-time communication using TCP socket connections",
        "Used basic concepts of OSI Layer (Transport Layer - TCP)",
        "Client-to-client message flow through centralized server"
      ]
    },
    {
      title: "Patient Details Management System",
      description: "A backend RESTful API system developed using Java and Spring Boot to manage patient information, supporting full CRUD operations with secure data handling.",
      image: Project6, 
      technologies: ["Java", "Spring Boot", "MySQL", "Maven", "Postman", "REST API"],
      githubLink: "https://github.com/Malarselvimarimuthu/PaitentDetails", 
      features: [
        "RESTful API with endpoints for all CRUD operations",
        "Secure data access using Spring Boot best practices",
        "Integrated with MySQL for persistent storage",
        "Tested using Postman for API verification"
      ]
    }

   
    
  ];

  return (
<div className="min-h-screen bg-[#0B0B1E] text-white px-4 py-16">
  {/* Header Section */}
  <div className="text-center mb-16">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      <span className="text-[#64CCC5]">My Projects</span>
    </h1>
    <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto">
      Showcasing my journey through code
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
    {projects.map((project, index) => (
      <div 
        key={index} 
        className="group bg-gray-800/30 rounded-sm overflow-hidden 
                   transition-all duration-300 transform 
                   hover:shadow-xl hover:shadow-purple-500/20
                   border-2 border-gray-700/50
                   flex flex-col"
      >
        {/* Image Section */}
        <div className="relative">
          <div className="relative h-[300px] overflow-hidden border-b-2 border-gray-700/50">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>

          <p className="text-gray-300 text-sm mb-6">
            {project.longDescription}
          </p>

          {/* Features Section */}
          <div className="mb-6">
            <h5 className="font-semibold text-purple-400 mb-3">
              Key Features:
            </h5>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-4 py-1.5 bg-gray-700/50 rounded-full text-sm
                         hover:bg-gray-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-6 mt-auto">
            {project.liveLink ? (<a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 
                       transition-colors flex-1 text-center font-medium"
            >
              Live Demo
            </a>):(<button 
            disabled 
          >
          </button>)}
            {project.githubLink ? (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 
                       transition-colors flex-1 text-center font-medium"
            >
              Source Code
            </a>):(<button 
            disabled 
          >
          </button>)}
          </div>
        </div>
      </div>
    ))}
  </div>
  <Divider/>
</div>
  );
};

export default Projects;