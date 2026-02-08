import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      year: '2024 - Present',
      role: 'Frontend Developer',
      company: 'Freelance',
      description: 'Building responsive web applications and custom websites for clients worldwide. Specializing in React, Tailwind CSS, and modern web technologies.',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Figma'],
    },
    {
      year: '2023 - 2024',
      role: 'Web Designer',
      company: 'Creative Solutions',
      description: 'Designed and developed user-friendly interfaces for various web applications. Collaborated with teams to deliver pixel-perfect designs.',
      skills: ['HTML/CSS', 'Bootstrap', 'JavaScript', 'WordPress'],
    },
    {
      year: '2022 - 2023',
      role: 'Junior Developer',
      company: 'Tech Startup',
      description: 'Assisted in developing web applications and maintaining existing codebases. Learned modern development practices and agile methodologies.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
    },
  ];

  return (
    <section className="experience-section" id="experience-loc" ref={ref}>
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My <span>Journey</span></h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">My professional experience and career path</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">{exp.year}</div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
