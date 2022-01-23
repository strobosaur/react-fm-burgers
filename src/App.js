import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header'
import Home from './components/Home'
import Bread from './components/Bread'
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
    <>
      <Header />
      <Switch>
        <Route path="/bread">
          <Bread addBread={addBread} burger={burger} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} burger={burger} />
        </Route>
        <Route path="/order">
          <Order burger={burger} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
