import React, { useRef } from 'react';
import './Portfolio.scss';
import { FiChevronsDown } from "react-icons/fi";

const Portfolio = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      <div className="portfolio__left">
      <div className='circle'></div>
  <div className='circle'></div>
  <div className='circle'></div>
  <div className='circle'></div>
  <div className='circle'></div>
        <div className="portfolio__header">
          <h1 className="portfolio__title">VTDT Internship Projects</h1>
          <p className="portfolio__description">
            Here are displayed the projects, that were created during the internship in 2024/2025 by final year students.
          </p>
        </div>
        
        <nav className="portfolio__nav">
          <ul className="portfolio__nav-list"> 
            <li>
              <button 
                onClick={() => scrollToSection(aboutRef)}
                className="portfolio__nav-link"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(projectsRef)}
                className="portfolio__nav-link"
              >
                Projects
              </button>
            </li>
          </ul>
        </nav>
      </div>
<div className="portfolio__divider"></div>
      <div className="portfolio__right">
        
        <section ref={aboutRef} className="section section--about">
          <h2 className="section__title">About Us</h2>
          <div className="section__content">
            <p>
              Founded in 2020, TechCorp Solutions has been at the forefront of 
              technological innovation. Our team of dedicated professionals brings 
              together decades of combined experience in software development, 
              design, and digital strategy.
            </p>
            <p>
              We believe in creating solutions that not only meet current needs 
              but anticipate future challenges. Our approach combines technical 
              excellence with creative innovation.
            </p>
            <p>
              With a focus on user-centered design and scalable architecture, 
              we deliver projects that make a lasting impact.
            </p>
          </div>
        </section>

        <section ref={projectsRef} className="section section--projects">
          <h2 className="section__title">Our Projects</h2>
          <div className="projects-grid">
            {[
              {
                title: "SEO Site",
                description: "A full-stack e-commerce solution with real-time inventory management.",
                tech: "React, Node.js, MongoDB"
              },
              {
                title: "Forecast App",
                description: "Interactive dashboard for medical professionals to monitor patient data.",
                tech: "React, D3.js, Firebase"
              },
              {
                title: "LinChecker",
                description: "Secure and intuitive mobile banking application.",
                tech: "React Native, Redux, AWS"
              }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <p className="project-card__tech">{project.tech}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="icon-wrapper"><FiChevronsDown /></div>    
  </div>
    
  );
};

export default Portfolio;