import React, { Component } from 'react';
import './assets/scss/global.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppHeader } from './cmps/AppHeader';
import { ShopPage } from './pages/ShopPage';
import { SigninPage } from './pages/SigninSignupPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

export class App extends Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader currentUser={this.state.currentUser} />
          <main className='container'>
            <Switch>
              <Route exact component={HomePage} path='/' />
              <Route component={ShopPage} path='/shop' />
              <Route component={SigninPage} path='/signin' />
            </Switch>
          </main>
        </div>
      </Router >
    );

  }
}


