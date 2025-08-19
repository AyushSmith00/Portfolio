
import React from 'react';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';

const skillsData = [
  { name: 'JavaScript', iconClass: 'bxl-javascript' },
  { name: 'React', iconClass: 'bxl-react' },
  { name: 'Tailwind CSS', iconClass: 'bxl-tailwind-css' },
  { name: 'Node.js', iconClass: 'bxl-nodejs' },
  { name: 'Express.js', iconClass: 'bxl-nodejs' },
  { name: 'Python', iconClass: 'bxl-python' },
  { name: 'MongoDB', iconClass: 'bxl-mongodb' },
  { name: 'Git', iconClass: 'bxl-git' },
  { name: 'Appwrite', iconClass: 'bxs-server' },
  { name: 'React Redux', iconClass: 'bxl-redux' },
  { name: 'PyQt', iconClass: 'bxl-python' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 lg:px-20 text-white">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in" 
            data-aos-delay={50 * index} 
            data-aos-duration="800"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg border-2 border-transparent transition-all duration-300 hover:border-orange-500 hover:scale-105"
          >
            <i 
              className={`bx ${skill.iconClass} text-5xl md:text-6xl text-orange-400 mb-4`} 
              aria-hidden="true" 
            ></i>
            <h3 className="text-xl font-semibold text-center">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}