import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Toppings = ({ addTopping, burger }) => {
  let toppings = ['pickled onion', 'pickled cucumber', 'onion', 'tomato', 'salad', 'Sriracha Mayo', 'Classic dressing', 'BBQ Sauce', 'Ketchup', 'Truffel mayo']

  return (  
    <div className="toppings container">

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

    </div>
  );
}
 
export default Toppings;