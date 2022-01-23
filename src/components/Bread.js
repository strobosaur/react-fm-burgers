import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Bread = ({ addBread, burger }) => {
  const breadTypes = ['Classic', 'Brioche', 'Frisco', 'Classic XL']

  return (  
    <div className="bread container">
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
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}

    </div>
  );
}
 
export default Bread;