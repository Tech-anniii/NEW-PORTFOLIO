import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Project.css";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Paramotoring Booking Platform",
      description: "A comprehensive booking platform for paramotoring experiences.",
      image: "./images/paramotoring.jpg",
      link: "https://abhayadventure.netlify.app/",
      tags: ["Next.js", "Tailwind CSS", "MongoDB"]
    },
    {
      title: "Expense Tracker",
      description: "A web application to track personal expenses and manage budgets effectively.",
      image: "./images/expense-tracker.png",
      link: "https://expenses-tracker-xe29.onrender.com/",
      tags: ["Python", "Flask", "SQLalchemy", "JavaScript"]
    },
    {
      title: "Quick Cargo",
      description: "A responsive website for a cargo and logistics company to facilitate online bookings and inquiries.",
      image: "./images/abhayaventures.png",
      link: "https://github.com/Tech-anniii/Quick-Cargo",
      tags: ["React", "Responsive", "Client Work"]
    },
    {
      title: "Get Me A Chai",
      description: "It is Crowdfunding platform for creators to raise funds for their projects.",
      image: "./images/tea.gif",
      link: "https://github.com/Tech-anniii/Get-me-A-Chai",
      tags: ["JavaScript", "Audio API", "UI/UX"]
    },
    {
      title: "TIC TAC TOE GAME",
      description: "Game with winning, loosing functionality",
      image: "./images/TIC TAC TOE.png",
      link: "https://skeptichumans.netlify.app/",
      tags: ["JavaScript", "Game Logic", "Interactive"]
    },
    {
      title: "Rock Paper Scissors Game",
      description: "Game with winning, loosing functionality",
      image: "./images/rock-paper-scissor.png",
      link: "https://techrpsgame.netlify.app/",
      tags: ["JavaScript", "Game Logic", "Interactive"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div id="portfolio-loc">
      <section className="portfolio" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="heading">Latest <span>Projects</span></h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Check out my recent work</p>
        </motion.div>

        <motion.div
          className="portfolio-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-box"
              variants={projectVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay"></div>
              </div>
              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <motion.a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="project-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className='bx bx-link-external'></i>
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
