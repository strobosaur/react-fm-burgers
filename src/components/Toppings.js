import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

// CONTAINER ANIMATION STATES
const containerVariants = {
  hidden: {
    x: '-3vw',
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
    scale: 1.025, 
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

const Toppings = ({ addTopping, burger }) => {
  let toppings = ['Pickled onion', 'Pickled cucumber', 'Onion', 'Tomato', 'Salad', 'Sriracha Mayo', 'Classic dressing', 'BBQ Sauce', 'Ketchup', 'Truffel mayo']

  return (  
    <motion.div className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <h3>Step 2: Choose your toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = burger.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  );
}
 
export default Toppings;