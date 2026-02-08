import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <h3 className="footer-logo">
              Aniket<span>.</span>
            </h3>
            <p>
              Creating beautiful and functional web experiences. Let's build something amazing together.
            </p>
            <div className="footer-social">
              {[
                { icon: <FaGithub />, link: 'https://github.com/Tech-anniii' },
                { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/aniket-singh-baghel-1938b5253/' },
                { icon: <SiLeetcode />, link: "https://leetcode.com/u/AniketSinghBaghel/" },
                { icon: <FaInstagram />, link: 'https://www.instagram.com/aniket_singh_baghel_?igshid=NGVhN2U2NjQ0Yg%3D%3D' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about-loc">About</a></li>
              <li><a href="#skills-loc">Skills</a></li>
              <li><a href="#portfolio-loc">Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Software Development</li>
              <li>Frontend Development</li>
              <li>Flask App Development</li>
              <li>Responsive Websites</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>aniketsinghbaghel1205@gmail.com</li>
              <li>+91 7000516112</li>
              <li>Bhopal, India</li>
              <li><a href="#contact-loc">Send Message</a></li>
            </ul>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Aniket Singh. 
          </p>
          <p className="footer-credit">All rights reserved.</p>
        </div>
      </div>

      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
