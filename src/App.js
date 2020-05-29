import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './utils/firebase/firebase';
import Homepage from './components/pages/Homepage/Homepage';
import Shop from './components/pages/Shop';
import SignInSignUp from './components/pages/SignInSignUp';
import Header from './components/Header';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './components/pages/Checkout';

import './App.css';

class App extends React.Component {
  // state = {
  //   currentUser: null
  // };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data,
          });
        });
      }
      setCurrentUser(userAuth);
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
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />
            }
          />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
