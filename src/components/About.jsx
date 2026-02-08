import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="about-section" id="about-loc" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-wrapper">
              <div className="image-border"></div>
              <div className="profile-placeholder">
                <span className="initial">AS</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <h3>Full-Stack Developer</h3>
            <p>
              Passionate full-stack developer with expertise in modern web technologies including React.js,
              Node.js, and Next.js. I specialize in creating seamless, responsive web applications that 
              deliver exceptional user experiences.
            </p>
            <p>
              Proficient in multiple programming languages (Java, Python, JavaScript) and frameworks (Flask, 
              React, Next.js). Strong foundation in databases (MongoDB, MySQL) and essential developer tools
              (VS Code, Git, GitHub). Committed to writing clean, maintainable code with solid understanding
              of OOP and Data Structures & Algorithms.
            </p>

            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-icon">⚛️</span>
                <div>
                  <h4>Frontend Development</h4>
                  <p>React.js, Next.js, Tailwind CSS</p>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🔧</span>
                <div>
                  <h4>Backend Development</h4>
                  <p>Node.js, Flask, Python</p>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🗄️</span>
                <div>
                  <h4>Database Management</h4>
                  <p>MongoDB, MySQL, SQLAlchemy</p>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-icon">💡</span>
                <div>
                  <h4>Core Concepts</h4>
                  <p>OOP, DSA, Problem Solving</p>
                </div>
              </div>
            </div>

            <motion.a
              href="#contact-loc"
              className="btn-about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>

        {/* <motion.div className="stats-container" variants={itemVariants}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default About;
