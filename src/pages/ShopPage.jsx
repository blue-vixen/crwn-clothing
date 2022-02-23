import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../store/actions/shop-actions';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../store/selectors/shop-selector';

import { WithSpinner } from '../cmps/WithSpinner/WithSpinner';
import { CollectionsOverview } from '../cmps/CollectionsOverview';
import { CollectionPage } from './CollectionPage';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class _ShopPage extends Component {

  componentDidMount() {
    const { fetchCollectionsStart } = this.props
    fetchCollectionsStart()
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props
    return <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
    </div>;
  }


}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export const ShopPage = connect(mapStateToProps, mapDispatchToProps)(_ShopPage)
