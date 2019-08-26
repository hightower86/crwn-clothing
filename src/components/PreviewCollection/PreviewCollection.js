import React from 'react';

import './PreviewCollection.scss';

const PreviewCollection = props => {
  const { items, title } = props;
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, name, price, imageUrl }) => (
            <div
              className='card'
              key={id}
              style={{
                backgroundImage: `url(${imageUrl})`
              }}
            >
              {`${name} `}
              <p>{`$${price}`}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
