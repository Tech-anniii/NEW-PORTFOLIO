import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Skills.css";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'HTML5', image: './images/html.png', level: 90 },
    { name: 'CSS3', image: './images/css.png', level: 88 },
    { name: 'JavaScript', image: './images/javascript.png', level: 85 },
    { name: 'React.js', image: './images/react.png', level: 90 },
    { name: 'Node.js', image: './images/nodejs.png', level: 82 },
    { name: 'Next.js', image: './images/nextjs.png', level: 80 },
    { name: 'Python', image: './images/python.png', level: 85 },
    { name: 'Java', image: './images/java.png', level: 80 },
    { name: 'Flask', image: './images/flask.png', level: 78 },
    { name: 'MongoDB', image: './images/mongo.png', level: 82 },
    { name: 'MySQL', image: './images/mysql.png', level: 80 },
    { name: 'Tailwind CSS', image: './images/tailwind.png', level: 88 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id='skills-loc'>
      <section className="skills" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h1>My <span>Skills</span></h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <motion.div
          className="cards"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-icon-wrapper">
                <img src={skill.image} alt={skill.name} />
              </div>
              <h2>{skill.name}</h2>
              <div className="skill-progress">
                <motion.div 
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <span className="progress-label">{skill.level}%</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
