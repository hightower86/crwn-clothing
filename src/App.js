import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './utils/firebase/firebase';
import Homepage from './components/pages/Homepage/Homepage';
import Shop from './components/pages/Shop';
import SignInSignUp from './components/pages/SignInSignUp';
import Header from './components/Header';

import './App.css';

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          {/* <Route path='/contact' component={Contact} /> */}
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
