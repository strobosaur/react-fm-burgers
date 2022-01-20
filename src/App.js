import { useState } from 'react'

// CSS STYLES
import './App.css';

function App() {
  const [burger, setBurger] = useState({ bread: "", toppings: [] });

  const addBread = (bread) => {
    setBurger({...burger, bread})
  }

  const addTopping = (topping) => {
    let newToppings;
    if(!burger.toppings.includes(topping)){
      newToppings = [...burger.toppings, topping];
    } else {
      newToppings = burger.toppings.filter(item => item !== topping);
    }
    setBurger({ ...burger, toppings: newToppings });
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
