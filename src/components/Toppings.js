import React from 'react';
import { Link } from 'react-router-dom';

const Toppings = ({ addTopping, burger }) => {
  let toppings = ['pickled onion', 'pickled cucumber', 'onion', 'tomato', 'salad', 'Sriracha Mayo', 'Classic dressing', 'BBQ Sauce', 'Ketchup', 'Truffel mayo']

  return (  
    <div className="toppings container">

      <h3>Step 2: Choose your toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = burger.toppings.includes(topping) ? 'active' : '';
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>Order</button>
      </Link>

    </div>
  );
}
 
export default Toppings;