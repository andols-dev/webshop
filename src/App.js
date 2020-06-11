import React from 'react';
import './App.css';
//import { Button } from 'reactstrap';
import Navigation from './components/Navigation'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from "./pages/Cart";


function App() {
  return (
    <div>
      <Navigation />

      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>

      
    </div>
  );
}

export default App;
