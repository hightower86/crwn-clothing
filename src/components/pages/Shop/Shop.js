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
    console.log(collections);
    return (
      <div className='shop-page'>
        {collections.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    );
  }
}
