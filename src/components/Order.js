import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      staggerChildren: 0.25
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

// DEFAULT EXPORT
const Order = ({ burger, setBurger }) => {
  const redirectSecs = Math.floor(burger.toppings.length * 0.25) + 7;
  const history = useHistory();
  const [timer, setTimer] = useState(redirectSecs);

  // PAGE REDIRECT TIMEOUT
  useEffect(() => {
    var timeout = setTimeout(() => {
      if (timer <= 0) {
        handleRedirect();
      } else {
        setTimer((prevTimer) => {
          return (prevTimer - 1);
        });
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);

  // HANDLE REDIRECT
  const handleRedirect = () => {
    setBurger({ bread: "", toppings: [] })
    history.push('/');
  }

  // JSX CONTENT
  return (  
    <motion.div className="order container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order!</h2>
      <motion.p variants={childVariants}>You ordered a {burger.bread} burger with:</motion.p>
      {burger.toppings.map(topping => <motion.div variants={childVariants} key={topping}>{topping}</motion.div>)}
      <motion.div variants={childVariants}>
        <Link to="/">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => handleRedirect()}
          >
            Redirecting in {timer}
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
 
export default Order;