import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton:{
    opacity:0,
    y:0,
    transition:{
      duration:3,
      repeat:Infinity,
      ease: "linear",
    }
  },
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      duration: 20,
      staggerChildren: 0.1,
      repeatType:"mirror",
      repeat:Infinity,
      ease: "linear",

    }
  },
}

const Hero = () => {  // Changed to uppercase for component naming convention
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div 
          className="textContainer" 
          variants={textVariants} 
          initial="initial"  // Changed from {initial} to "initial"
          animate="animate"  // Changed from {animate} to "animate"
        >
          <motion.h2 variants={textVariants}>Jeewaka Supun</motion.h2>
          <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <button variants={textVariants} className='btn1'>See the Latest Works</button>
            <button variants={textVariants} className='btn2'>Contact Me</button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
         Jeewaka Supun
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero  // Changed to match the component name