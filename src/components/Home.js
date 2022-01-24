import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// BUTTON ANIMATION VARIANTS
const buttonVariants = {
  initial: {
    // y: '0.25vw',
    opacity: 0.75
  },
  hover: {
    scale: 1.05,
    y: 0,
    opacity: 1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      type: 'spring',
      duration: 0.25
    }
  }
}

// CONTAINER ANIMATION VARIANTS
const containerVariants = {
  hidden: {
    opacity: 0,
    y: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.25,
      duration: 1.25
    }
  },
  exit: {
    x: '-3vw',
    opacity: 0,
    transition: { 
      ease: 'easeInOut'
    }
  }
}

// HOME COMPONENT
const Home = () => {
  return ( 
    <motion.div className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>
        Welcome to FM Burgers
      </h2>
      <Link to="/bread">
        <motion.button 
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          Create your burger
        </motion.button>
      </Link>
    </motion.div>
   );
}
 
export default Home;