import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/pages/Homepage/Homepage';
import Shop from './components/pages/Shop';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
