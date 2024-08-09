import React, { useRef } from 'react'
import "../Portfolio/portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id:1,
        title:"React.js Project",
        img:"https://images.pexels.com/photos/27372398/pexels-photo-27372398/free-photo-of-hiker-with-an-expedition-backpack-sitting-on-a-meadow-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis odio praesentium harum itaque libero similique soluta aut quisquam laboriosam eligendi, nesciunt non vero id dolor nam? Necessitatibus, placeat laborum.",
    },
    {
        id:2,
        title:"Next.js Project",
        img:"https://images.pexels.com/photos/3064714/pexels-photo-3064714.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis odio praesentium harum itaque libero similique soluta aut quisquam laboriosam eligendi, nesciunt non vero id dolor nam? Necessitatibus, placeat laborum.",
    },
    {
        id:3,
        title:"C# Project",
        img:"https://images.pexels.com/photos/541670/pexels-photo-541670.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis odio praesentium harum itaque libero similique soluta aut quisquam laboriosam eligendi, nesciunt non vero id dolor nam? Necessitatibus, placeat laborum.",
    },
    {
        id:4,
        title:"Java Project",
        img:"https://images.pexels.com/photos/27282677/pexels-photo-27282677/free-photo-of-morning-sunrise.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis odio praesentium harum itaque libero similique soluta aut quisquam laboriosam eligendi, nesciunt non vero id dolor nam? Necessitatibus, placeat laborum.",
    }, 
];

const Single = ({ item }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return (
        <section >
            <div className='container'>
                <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className='textContainer' style={{ y }} animate={{ y }}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({ 
        target: ref, 
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(
        scrollYProgress, 
        { stiffness: 100, damping: 30 }
    );

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio