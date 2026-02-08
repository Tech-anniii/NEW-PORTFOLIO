import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Personal.css';

const Personal = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    {
      icon: '💪',
      title: 'Fitness & Gym',
      description: 'Passionate about fitness and maintaining a healthy lifestyle. Regular gym enthusiast dedicated to personal growth and wellness.',
      image: './images/interest.jpeg',
    },
    {
      icon: '🏋️',
      title: 'Strength Training',
      description: 'Focus on building strength and endurance through consistent training and proper nutrition.',
      image: './images/workout.jpeg',
    },
    {
      icon: '🥗',
      title: 'Healthy Living',
      description: 'Believe in the power of discipline, nutrition, and mental wellness. Balance is key to success.',
      image: './images/healthy.jpeg',
    },
  ];

  return (
    <section className="personal-section" id="personal-loc" ref={ref}>
      <div className="personal-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Personal <span>Interests</span></h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Beyond coding - my passions and lifestyle</p>
        </motion.div>

        <div className="interests-grid">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="interest-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="interest-icon">{interest.icon}</div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
              {interest.image && (
                <div className="interest-image">
                  <img src={interest.image} alt={interest.title} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="personal-message"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Why I'm Passionate About Fitness</h3>
          <p>
            I believe that a healthy mind and body are essential for achieving excellence in all areas of life. 
            Fitness isn't just about physical appearance; it's about discipline, consistency, and pushing your limits. 
            These principles directly translate to my approach to web development and problem-solving.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Personal;
