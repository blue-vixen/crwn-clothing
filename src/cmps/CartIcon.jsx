import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../store/actions/cart-actions';
import { ReactComponent as ShoppingIcon } from '../assets/imgs/shopping-bag.svg'
import { selectCartItemsCount } from '../store/selectors/cart-selector'

function _CartIcon({ toggleCartHidden, itemCount }) {
    return <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>;
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(_CartIcon)