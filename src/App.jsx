import React, { Component } from 'react';
import './assets/scss/global.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppHeader } from './cmps/AppHeader';
import { ShopPage } from './pages/ShopPage';
import { SigninPage } from './pages/SigninSignupPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './store/actions/user-actions'

class _App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        setCurrentUser(userAuth)
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
          <AppHeader />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(dispatch(setCurrentUser(user)))
})


export const App = connect(null, mapDispatchToProps)(_App)


