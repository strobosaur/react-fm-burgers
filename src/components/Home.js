import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return ( 
    <motion.div className="home container"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', delay: 0.25, duration: 1.25 }}
    >
      <h2>
        Welcome to FM Burgers
      </h2>
      <Link to="/bread">
        <motion.button 
          whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Create your burger
        </motion.button>
      </Link>
    </motion.div>
   );
}
 
export default Home;