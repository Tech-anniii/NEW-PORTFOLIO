import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="greeting">Hello, It's Me</h3>
          <h1 className="name">Aniket Singh</h1>
          <h3 className="title">
            And I'm a{" "}
            <span className="typed-text">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "MERN Stack Developer",
                    "Fitness Enthusiast",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h3>

          <p className="hero-description">
            Full-stack developer specializing in React.js, Node.js, and Next.js.
            Proficient in Java and Python with expertise in Flask framework.
            Experienced with MongoDB and MySQL databases. Strong foundation in
            Data Structures, Algorithms, and Object-Oriented Programming.
          </p>

          <div className="hero-buttons">
            <motion.a
              href="#contact-loc"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#portfolio-loc"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </div>

          <div className="social-links">
            {[
              { icon: <FaGithub />, link: "https://github.com/Tech-anniii" },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/aniket-singh-baghel-1938b5253/",
              },
              {
                icon: <SiLeetcode />,
                link: "https://leetcode.com/u/AniketSinghBaghel/",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/aniket_singh_baghel_?igshid=NGVhN2U2NjQ0Yg%3D%3D",
              },
              {
                icon: <FaFacebook />,
                link: "https://www.facebook.com/people/Aniket-Singh-Baghel/pfbid02NoVEBZuGZQUi8h6eAtmHm1fFsVtedxfrpWyJs18yyEy8JyecEBuvdwtJ1Q2m6Crwl/?mibextid=ZbWKwL",
              },
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
        </motion.div>
      </motion.div>

      <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="relative flex items-center justify-center w-[400px] h-[480px] sm:w-[450px] sm:h-[520px]"
>
  {/* Glow */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-3xl opacity-40" />

  {/* Blob Image */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-[360px] h-[420px] sm:w-[400px] sm:h-[460px] overflow-hidden"
    style={{
      clipPath:
        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    }}
  >
    <img
      src="/images/profile3.png"
      alt="Aniket Singh"
      className="w-full h-full object-cover"
    />
  </motion.div>
</motion.div>


      <div className="scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll Down</span>
          <div className="mouse"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
