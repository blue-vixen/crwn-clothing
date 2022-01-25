import React, { Component } from 'react';
import { CollectionPreview } from '../cmps/CollectionPreview';
import { SHOP_DATA } from '../services/shop.service'

export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA

  }

  render() {
    const { collections } = this.state
    return <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>;
  }
}
