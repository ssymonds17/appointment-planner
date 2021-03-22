import React from 'react';

export const Tile = (props) => {
  console.log(props);
  let objectValues = Object.values(props.item);
  return (
    <div className='tile-container'>
      {objectValues.map((element, index) => {
        if (index === 0) {
          return <p className='tile-title'>{element}</p>;
        } else {
          return <p className='tile'>{element}</p>;
        }
      })}
    </div>
  );
};
