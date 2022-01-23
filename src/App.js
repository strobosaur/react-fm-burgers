import { useState } from 'react'

// COMPONENTS
import Header from './components/Header'
import Home from './components/Home'
import Base from './components/Base'
import Toppings from './components/Toppings'
import Order from './components/Order'

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
