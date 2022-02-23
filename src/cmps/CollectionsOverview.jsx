import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../store/selectors/shop-selector';

import { CollectionPreview } from '../cmps/CollectionPreview';

function _CollectionsOverview({ collections }) {
    return <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>;
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export const CollectionsOverview = connect(mapStateToProps)(_CollectionsOverview)