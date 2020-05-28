import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Navigation from './components/Navigation'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from "./pages/Cart";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
            <Cart />
          </Route>
        </Switch>
      </div>
      {/* End of container */}
      <Footer />
    </div>
  );
}

export default App;
