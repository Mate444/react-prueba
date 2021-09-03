import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ItemDetail = ({product}) => {
    const { name, picture, price } = product;
  return (
      <Card>
        <CardContent>
          <h1>{name}</h1>
          <img src={picture} alt={picture}/>
          <p>Price:{price}</p>
        </CardContent>
      </Card>
  );
}

export default ItemDetail;
