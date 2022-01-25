import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/imgs/crown.svg'
import { auth } from '../firebase/firebase.utils'

export function AppHeader({ currentUser }) {
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
