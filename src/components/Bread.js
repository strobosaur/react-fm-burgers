import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Bread = ({ addBread, burger }) => {
  const breadTypes = ['Classic', 'Brioche', 'Frisco', 'Classic XL']

  return (  
    <motion.div className="bread container"
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', delay: 0.25, duration: 0.2, stiffness: 75 }}
    >
      <h3>Step 1: Choose Your Bread</h3>
      <ul>
        {breadTypes.map(bread => {
          let spanClass = burger.bread === bread ? 'active' : '';
          return (
            <li key={bread} onClick={() => addBread(bread)}>
              <span className={spanClass}>{ bread }</span>
            </li>
          )
        })}
      </ul>

      {burger.bread && (
        <motion.div className="next"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 75 }}
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  );
}
 
export default Bread;