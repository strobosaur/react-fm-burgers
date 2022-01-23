import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

// CONTAINER ANIMATION STATES
const containerVariants = {
  hidden: {
    x: '-10vw',
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
    x: '10vw',
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
              whileHover={{ scale: 1.1, originX:0, color: '#f8e112'}}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}   
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  );
}
 
export default Toppings;