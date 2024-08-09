import React, { useRef } from 'react';
import "./about.scss";
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    x: -400,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px" });

  return (
    
    <motion.div className='aboutme' ref={ref}>
      {isInView && (
        <div className="content-wrapper">
          <motion.div className="imageContainer" initial="initial" animate="animate" variants={variants}>
            <motion.img src="/hero.png" alt="Your Name" variants={variants} />
          </motion.div>

          <motion.div className="textContainer" initial="initial" animate="animate" variants={variants}>
            <motion.h1 variants={variants}>About Me</motion.h1>
            <motion.p variants={variants}>
              Hello! I'm [Your Name], a passionate [Your Profession] with a keen interest in [Your Interests/Specialties]. 
              With [X] years of experience in the field, I've developed a strong foundation in [Key Skills].
              I believe in [Your Philosophy or Approach to Work].
            </motion.p>
            <motion.p variants={variants}>
              Throughout my career, I've had the opportunity to work on [Types of Projects/Achievements]. 
              I'm always eager to take on new challenges and continue learning in this ever-evolving industry.
            </motion.p>
            <motion.button variants={variants} onClick={() => window.open('https://www.linkedin.com/in/your-profile', '_blank')}>
              Connect on LinkedIn
            </motion.button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default AboutMe;