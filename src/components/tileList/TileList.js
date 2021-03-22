import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  let objectKey = Object.keys(props);
  const array = props[objectKey];
  return (
    <div>
      {array.map((item, index) => {
        return <Tile item={item} key={index} />;
      })}
    </div>
  );
};
