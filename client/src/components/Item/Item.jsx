import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 345,
      backgroundColor: 'gray'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
}));

const Item = ({product}) => {
  const { name, picture, price, stock, id } = product;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <CardHeader title={name} />
          <img src={picture} alt={picture}/>
          <Typography>
            Price: ${price} 
          </Typography>
          <Typography>
            Stock: {stock}
          </Typography>
          <NavLink to={`/products/${id}`}>Find More</NavLink>
      </CardContent>
    </Card>
  );
}

export default Item;
