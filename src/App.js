import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Navigation from './components/Navigation'
function App() {
  return (
    <div>
      <Navigation />
      <p>hello</p>
      <Button outline color="primary">primary</Button>{' '}
    </div>
  );
}

export default App;
