import React from 'react';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';

function Contact() {
  const emailAddress = "your-email@example.com"; // Replace with your actual email

  return (
    <section id="contact" className="py-20 px-4 lg:px-20 text-white flex flex-col items-center justify-center">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Get In Touch
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-12"
      >
        I'm always open to new opportunities and interesting projects. Feel free to reach out, whether you have a question or just want to connect.
      </p>
      
      <div 
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a 
          href="https://www.linkedin.com/in/ayush-upadhyay-01bba6280/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-lg font-bold text-white bg-gray-800 border-2 border-transparent transition-all duration-300 hover:bg-orange-500 hover:border-orange-500"
        >
          <i className="bx bxl-linkedin-square text-2xl"></i>
          LinkedIn
        </a>
        <a 
          href="https://github.com/AyushSmith00" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-lg font-bold text-white bg-gray-800 border-2 border-transparent transition-all duration-300 hover:bg-orange-500 hover:border-orange-500"
        >
          <i className="bx bxl-github text-2xl"></i>
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;