import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return ( 
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 1 }}
    >
      <h2>
        Welcome to FM Burgers
      </h2>
      <Link to="/bread">
        <motion.button 
          animate={{ }}
        >
          Create your burger
        </motion.button>
      </Link>
    </motion.div>
   );
}
 
export default Home;