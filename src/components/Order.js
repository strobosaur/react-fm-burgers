import React from 'react';
import { motion } from 'framer-motion';

// CONTAINER ANIMATION STATES
const containerVariants = {
  hidden: {
    y: '10vh',
    opacity: 0
  },
  visible: {
    opacity: 1,
    y:0,
    transition: {
      type: 'spring', 
      delay: 0.25, 
      duration: 0.2, 
      // mass: 0.4,
      // damping: 1.2,
      stiffness: 175,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  },
  exit: {
    y: '-10vh',
    opacity: 0,
    transition: { 
      ease: 'easeInOut'
    }
  }
}

// NEXT BUTTON ANIMATION STATES
const childVariants = {
  hidden: {
    opacity: 0    
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ burger }) => {
  return (  
    <motion.div className="order container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order!</h2>
      <motion.p variants={childVariants}>You ordered a {burger.bread} burger with:</motion.p>
      <motion.div variants={childVariants}>
        {burger.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  );
}
 
export default Order;