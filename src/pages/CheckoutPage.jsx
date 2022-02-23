import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../store/selectors/cart-selector';
import { CheckoutItem } from '../cmps/CheckoutItem';
import { StripeCheckoutButton } from '../cmps/StripeButton'

function _CheckoutPage({ cartItems, cartTotal }) {
    return <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
        }
        <div className='total'>
            <span>TOTAL: ${cartTotal}</span>
        </div>
        <div className='test-warning'>
            *Please use to following test credit card for payments*
            <br />
            4242 4242 4242 4242, Exp: 01/29, CVV: 678
        </div>
        <StripeCheckoutButton price={cartTotal} />
    </div>;
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export const CheckoutPage = connect(mapStateToProps)(_CheckoutPage)