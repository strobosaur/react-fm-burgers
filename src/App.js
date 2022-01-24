import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// COMPONENTS
import Header from './components/Header'
import Home from './components/Home'
import Bread from './components/Bread'
import Toppings from './components/Toppings'
import Order from './components/Order'

// CSS STYLES
import './App.css';

function App() {
  const location = useLocation();
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
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/bread">
            <Bread addBread={addBread} burger={burger} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} burger={burger} />
          </Route>
          <Route path="/order">
            <Order burger={burger} />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
