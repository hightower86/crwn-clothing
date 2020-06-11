import React from 'react';
import { connect } from 'react-redux';
import PreviewCollection from '../../PreviewCollection';
import './Shop.scss';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../../redux/shop/shop-selectors';

const Shop = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherProps }) => (
      <PreviewCollection key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);
