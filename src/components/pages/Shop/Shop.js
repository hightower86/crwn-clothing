import React, { Component } from 'react';
import PreviewCollection from '../../PreviewCollection';
import './Shop.scss';
import SHOP_DATA from './shopdata';

export default class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.data;
    return <div className='shop-page'>{collections.map()}</div>;
  }
}
