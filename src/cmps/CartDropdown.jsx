import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { CustomButton } from './CustomButton';
import { CartItem } from './CartItem';
import { selectCartItems } from '../store/selectors/cart-selector'
import { toggleCartHidden } from '../store/actions/cart-actions'

function _CartDropdown({ cartItems, history, dispatch }) {
    return <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div >;
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export const CartDropdown = withRouter(connect(mapStateToProps)(_CartDropdown))