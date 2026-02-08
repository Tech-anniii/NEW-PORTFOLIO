import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Startup',
      image: 'JD',
      text: 'Aniket delivered exceptional work on our website. His attention to detail and creative approach exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      image: 'SJ',
      text: 'Working with Aniket was a pleasure. He understood our requirements perfectly and delivered a beautiful, responsive website on time.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Product Designer',
      image: 'MC',
      text: 'Outstanding frontend developer! His technical skills and problem-solving abilities are top-notch. Would definitely work with him again.',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Client <span>Reviews</span></h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">What people say about my work</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(0, 212, 255, 0.3)' }}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.image}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
