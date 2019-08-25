import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/pages/Homepage/Homepage';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
);

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
