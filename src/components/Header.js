import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <header>
      <div className="logo">
        <svg className="burger-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </div>
      <motion.div className="title"
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: -10, opacity: 1 }}
        transition={{ delay: 0.25, type: 'spring', duration: 0.5, stiffness: 65 }}
      >
        <Link to="/">
          <h1>FM burgers</h1>
        </Link>
      </motion.div>
    </header>
   );
}
 
export default Header;