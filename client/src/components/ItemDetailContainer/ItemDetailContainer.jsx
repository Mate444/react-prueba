import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

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


const ItemDetailContainer = (props) => {
  const [productDetail, setProductDetail] = useState({});
  const id = props.match.params.id;
  const promise = new Promise((resolve, reject) => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
        resolve(foundProduct)
    } else {
      reject('Product not found');
    };
  });
  useEffect(() => {
    promise.then(res => setTimeout(() => setProductDetail(res), 1500))
    .catch(err => console.log(err));
  }, []);
  return (
    <div>
        {
            productDetail.id && 
            <ItemDetail product={productDetail}/>
        }
          <NavLink to='/'>
        <Button variant='contained'> Go Back </Button>
      </NavLink>
    </div>
  );
}

export default ItemDetailContainer;
