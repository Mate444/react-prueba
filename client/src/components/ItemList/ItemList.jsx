import React from 'react';
import Item from '../Item/Item';

const ItemList = ({products}) => {
  return (
    <div className='list-container'>
      {
        products.length > 0 && products.map((p) => (
          <Item key={p.name} product={p}/>
        ))
      }
    </div>
  );
}

export default ItemList;
