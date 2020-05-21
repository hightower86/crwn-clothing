import React from 'react';

import './PreviewCollection.scss';
import CollectionItem from '../CollectionItem';

const PreviewCollection = (props) => {
  const { items, title } = props;
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
            /* <div
              className='card'
              key={id}
              style={{
                backgroundImage: `url(${imageUrl})`
              }}
            >
              {`${name} `}
              <p>{`$${price}`}</p>
            </div> */
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
