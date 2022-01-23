import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return ( 
    <div className="home-container">
      <h2>
        Welcome to FM Burgers
      </h2>
      <Link to="/bread">
        <button>
          Create your burger
        </button>
      </Link>
    </div>
   );
}
 
export default Home;