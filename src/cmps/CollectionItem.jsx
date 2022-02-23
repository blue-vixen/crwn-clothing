import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store/actions/cart-actions';
import { CustomButton } from './CustomButton';


function _CollectionItem({ item, addItem }) {

    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export const CollectionItem = connect(null, mapDispatchToProps)(_CollectionItem)