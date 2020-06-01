import React from 'react';

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../MenuItem';

import './Directory.scss';
const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherParams }) => (
      <MenuItem key={id} {...otherParams} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
