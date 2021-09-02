import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const products = [{
  id: 1,
  name: 'Nike e-3',
  picture: 'zapas-1',
  price: 13,
  stock: 4,
    },
    {
  id: 2,
  name: 'Adidas 56',
  picture: 'zapas-2',
  price: 24,
  stock: 2,
   },
   {
  id: 3,
  name: 'Converse Revolution',
  picture: 'zapas-3',
  price: 11,
  stock: 5,
    },
];

const promise = new Promise((resolve) => {
  setTimeout(() => resolve(products), 2500);
});

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    promise.then(res => setProductList(res))
    .catch(err => console.log(err));
  }, [])
  return (
    <>
      <ItemList products={productList}/>
    </>
  );
}

export default ItemListContainer;
