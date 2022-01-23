import React from 'react';
import { Link } from 'react-router-dom';

const Bread = ({ addBread, burger }) => {
  const breadTypes = ['Classic', 'Brioche', 'Frisco', 'Classic XL']

  return (  
    <div className="base-container">
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
        <div className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
      
    </div>
  );
}
 
export default Bread;