import React from 'react';

const Order = ({ burger }) => {
  return (  
    <div className="order container">
      <h2>Thank you for your order!</h2>
      <p>You ordered a {burger.bread} burger with:</p>
      {burger.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </div>
  );
}
 
export default Order;