import React from 'react';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';

const projectsData = [
  {
    title: 'ImageScribe',
    description: "Fullstack website where users can create accounts, write their own blog posts, and save them.",
    imageUrl: 'https://www.elegantthemes.com/blog/wp-content/uploads/2022/12/Best-Blogging-Platforms-featured-image.png',
    githubLink: 'https://github.com/AyushSmith00/ImageScribe',
    liveLink: null, // Add a live link if available
  },
  {
    title: 'MiruTube',
    description: "A backend-driven YouTube clone designed to replicate and extend the core functionalities of a modern video-sharing platform.",
    imageUrl: 'https://api.freelogodesign.org/assets/blog/thumb/dad60455501c42dd8750f840f07466df_1176x840.jpg?t=638368609470000000',
    githubLink: 'https://github.com/AyushSmith00/MiruTube',
    liveLink: null,
  },
  {
    title: 'EazyRenamer',
    description: "Renamer application built using PyQt and Python. It provides renaming multiple files or folders with various renaming options.",
    imageUrl: 'https://www.fileeagle.com/data/2015/12/Bulk-Rename-Utility.png',
    githubLink: 'https://github.com/AyushSmith00/EazyRenamer',
    liveLink: null,
  },
  {
    title: 'karasunoBot',
    description: 'Discord bot built in python that responds to the neko command by sending adorable cat images.',
    imageUrl: 'https://cdn.prod.website-files.com/60773c7aeb3fb93753419380/655e59a6aaeee0c8e2657051_Discord.png',
    githubLink: 'https://github.com/AyushSmith00/Karasuno_Bot',
    liveLink: null,
  },
  {
    title: 'AetherClock',
    description: 'Real-time WebSocket Clock This project demonstrates a real-time clock application that synchronizes time across all connected clients using WebSockets.',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1358/1*v9cAHG4pDMPrrS--f3x4cQ.jpeg',
    githubLink: 'https://github.com/AyushSmith00/AetherClock',
    liveLink: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 lg:px-20 text-white">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projectsData.map((project, index) => (
          <div
            key={index}
            data-aos="zoom-in-up" 
            data-aos-delay={100 * index} 
            data-aos-duration="800"
            className="group flex flex-col rounded-xl overflow-hidden shadow-lg border-2 border-transparent transition-all duration-300 hover:border-orange-500 bg-gray-900"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col p-6 flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-6 mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white font-medium transition-colors hover:text-orange-500"
                >
                  <i className="bx bxl-github text-xl"></i>
                  GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-medium transition-colors hover:text-orange-500"
                  >
                    <i className="bx bx-link-external text-xl"></i>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}