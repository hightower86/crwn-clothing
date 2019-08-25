import React from 'react';

import './Homepage.scss';

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='box1 menu-item'>
          <div className='content'>
            <h1 className='title'>HATS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='box2 menu-item'>
          <div className='content'>
            <h1 className='title'>JACKETS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='box3 menu-item'>
          <div className='content'>
            <h1 className='title'>SNEAKERS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='box4 menu-item'>
          <div className='content'>
            <h1 className='title'>WOMANS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='box5 menu-item'>
          <div className='content'>
            <h1 className='title'>MENS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
