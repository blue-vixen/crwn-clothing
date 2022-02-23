import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../firebase/firebase.utils'

import { ReactComponent as Logo } from '../assets/imgs/crown.svg'
import { CartIcon } from './CartIcon';
import { CartDropdown } from './CartDropdown'
import { selectCartHidden } from '../store/selectors/cart-selector';
import { selectCurrentUser } from '../store/selectors/user-selector';
import { signOutStart } from '../store/actions/user-actions'

function _AppHeader({ currentUser, hidden, signOutStart }) {
    return <header className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <nav>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={signOutStart}>SIGN OUT</div>
                    :
                    <Link to='/signin' className='option'>SIGN IN</Link>
            }
            <CartIcon />
        </nav>
        {
            hidden ? null : <CartDropdown />
        }
    </header>;
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)