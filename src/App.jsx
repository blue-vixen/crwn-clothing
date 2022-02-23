import React, { Component } from 'react';
import './assets/scss/global.scss';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HomePage } from './pages/HomePage';
import { AppHeader } from './cmps/AppHeader';
import { ShopPage } from './pages/ShopPage';
import { SigninPage } from './pages/SigninSignupPage';
import { CheckoutPage } from './pages/CheckoutPage';

import { checkUserSession } from './store/actions/user-actions';
import { selectCurrentUser } from './store/selectors/user-selector';

class _App extends Component {

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession();
  }

  componentWillUnmount() {
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
              <Route exact path='/signin' render={() => this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SigninPage />
              )
              }
              />
              <Route exact path='/checkout' component={CheckoutPage} />
            </Switch>
          </main>
        </div>
      </Router >
    );

  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)


