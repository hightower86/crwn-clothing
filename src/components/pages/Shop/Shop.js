import React, { Component } from 'react';
import PreviewCollection from '../../PreviewCollection';
import './Shop.scss';
import SHOP_DATA from './shopdata';

export default class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    //console.log(collections);
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherProps }) => (
          //<div key={id}>{title}</div>
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
