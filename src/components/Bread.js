import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// CONTAINER ANIMATION STATES
const containerVariants = {
  hidden: {
    x: '10vw',
    opacity: 0
  },
  visible: {
    opacity: 1,
    x:0,
    transition: {
      type: 'spring', 
      delay: 0.25, 
      duration: 0.2, 
      stiffness: 175 
    }
  }
}

// NEXT BUTTON ANIMATION STATES
const nextVariants = {
  hidden: {
    x: '-10vw',
    opacity: 0    
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 175
    }
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
      type: 'spring'
    }
  }
}

// LIST ANIMATION VARIANTS
const listVariants = {
  hover: {
    scale: 1.075, 
    originX: 0, 
    x: '0.25vw',
    color: '#f8e112',
    transition: {
      type: 'tween', 
      stiffness: 150, 
      duration: 0.075
    }
  }
}

const Bread = ({ addBread, burger }) => {
  const breadTypes = ['Classic', 'Brioche', 'Frisco', 'Classic XL']

  return (  
    <motion.div className="bread container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 1: Choose Your Bread</h3>
      <ul>
        {breadTypes.map(bread => {
          let spanClass = burger.bread === bread ? 'active' : '';
          return (
            <motion.li key={bread} onClick={() => addBread(bread)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{ bread }</span>
            </motion.li>
          )
        })}
      </ul>

      {burger.bread && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  );
}
 
export default Bread;