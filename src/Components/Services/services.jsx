import React, { useRef } from 'react';
import "./services.scss";
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

const Services = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-150px" });

  return (
    <motion.div className='services' ref={ref}>
      {isInView && (
        <>
          <motion.div className="textContainer" initial="initial" animate="animate" variants={variants}>
            <p>
              Our services are designed to help you achieve your goals 
              <br/> and improve your overall well-being. We offer
            </p>
            <hr/>
          </motion.div>

          <motion.div className="titleContainer" initial="initial" animate="animate" variants={variants}>
            <div className="title">
              <img src="/people.webp" alt="" />
              <h1>
                <b>Unique</b> Ideas
              </h1>
            </div>
            <div className="title">
              <h1>
                <b>For Your</b> Business.
              </h1>
              <button>What We Do</button>
            </div>
          </motion.div>

          <motion.div className="listContainer" initial="initial" animate="animate" variants={variants}>

            <motion.div className="box" initial="initial" animate="animate" variants={variants}>
              <h2>Branding</h2>
              <p>
                Laborum in qui anim ipsum velit minim dolor. 
                Pariatur esse veniam sunt qui. Lorem ipsum consequat culpa adipisicing cupidatat sunt ea. 
                Adipisicing laboris officia veniam qui mollit qui culpa do dolore mollit tempor elit. 
                Sint et irure labore eu occaecat fugiat eu tempor enim duis enim officia ullamco.
              </p>
              <button>Go</button>
            </motion.div>
            <motion.div className="box" initial="initial" animate="animate" variants={variants}>
              <h2>Branding</h2>
              <p>
                Laborum in qui anim ipsum velit minim dolor. 
                Pariatur esse veniam sunt qui. Lorem ipsum consequat culpa adipisicing cupidatat sunt ea. 
                Adipisicing laboris officia veniam qui mollit qui culpa do dolore mollit tempor elit. 
                Sint et irure labore eu occaecat fugiat eu tempor enim duis enim officia ullamco.
              </p>
              <button>Go</button>
            </motion.div>
            <motion.div className="box" initial="initial" animate="animate" variants={variants}>
              <h2>Branding</h2>
              <p>
                Laborum in qui anim ipsum velit minim dolor. 
                Pariatur esse veniam sunt qui. Lorem ipsum consequat culpa adipisicing cupidatat sunt ea. 
                Adipisicing laboris officia veniam qui mollit qui culpa do dolore mollit tempor elit. 
                Sint et irure labore eu occaecat fugiat eu tempor enim duis enim officia ullamco.
              </p>
              <button>Go</button>
            </motion.div>
            <motion.div className="box" initial="initial" animate="animate" variants={variants}>
              <h2>Branding</h2>
              <p>
                Laborum in qui anim ipsum velit minim dolor. 
                Pariatur esse veniam sunt qui. Lorem ipsum consequat culpa adipisicing cupidatat sunt ea. 
                Adipisicing laboris officia veniam qui mollit qui culpa do dolore mollit tempor elit. 
                Sint et irure labore eu occaecat fugiat eu tempor enim duis enim officia ullamco. 
              </p>
              <button>Go</button>
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Services;