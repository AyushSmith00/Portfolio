import React from 'react';
import 'aos/dist/aos.css';

// You can move this data to a separate file if it gets large
const educationData = [
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Amity Online',
    years: '2023 - 2026',
  },
  // Add more education entries here if needed
  // {
  //   degree: 'High School Diploma',
  //   institution: 'Your High School',
  //   years: '2020 - 2022',
  //   gpa: '4.0'
  // }
];

function About() {
  return (
    <section id="about" className="py-20 px-4 lg:px-20 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="w-full lg:w-1/3 flex justify-center"
          >
            <img
              src="Profile.jpg"
              alt="Ayush Upadhyay professional profile picture"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-orange-500 transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <h3
              data-aos="fade-down"
              data-aos-duration="1200"
              className="text-3xl font-semibold mb-4 text-center lg:text-left"
            >
              Passionate Full-Stack Developer
            </h3>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed"
            >
              My journey into web development began with a fascination for how websites work, from the complex logic of the backend to the interactive elements of the user interface. I specialize in building robust and scalable applications using modern technologies like React, Node.js, and Express. I am constantly learning and exploring new frameworks and tools to enhance my skills and create more efficient and dynamic solutions.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              className="text-gray-400 text-base md:text-lg leading-relaxed"
            >
              This portfolio is a showcase of my passion and dedication. I invite you to explore my projects and see how I bring ideas to life through code.
            </p>

            <div className="mt-8">
              <h4
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-2xl font-semibold mb-4 text-center lg:text-left"
              >
                Education
              </h4>
              <div className="flex flex-col gap-4">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                    data-aos-duration="1000"
                    className="bg-gray-800 p-6 rounded-xl border-2 border-transparent transition-all duration-300 hover:border-orange-500"
                  >
                    <p className="text-xl font-medium mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-gray-400">
                      {edu.institution} | {edu.years}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;