import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/imgs/crown.svg'
import { auth } from '../firebase/firebase.utils'
import { connect } from 'react-redux';

function _AppHeader({ currentUser }) {
    return <header className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <nav>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to='/signin' className='option'>SIGN IN</Link>
            }
        </nav>
    </header>;
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export const AppHeader = connect(mapStateToProps)(_AppHeader)