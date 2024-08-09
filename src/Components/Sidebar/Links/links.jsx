
import { motion } from "framer-motion";
import { scroller } from 'react-scroll';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Links = ({ refs, setOpen }) => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  const handleClick = (item) => {
    setOpen(false); // Close the sidebar
    scroller.scrollTo(refs[item], {
      duration: 15000, // adjust the duration to your liking
      smooth: true,
      offset: -100, // adjust the offset to your liking
    });
  };

  return (
    <motion.div
      className='links'
      initial="closed" // Set the initial state to "closed"
      animate="open" // Set the animated state to "open"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          onClick={() => handleClick(item)}
          key={item}
          initial="closed" // Set the initial state to "closed"
          animate="open" // Set the animated state to "open"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;