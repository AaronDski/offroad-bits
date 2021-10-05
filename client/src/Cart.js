import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




function Cart({item, onDelete}) {
  

    return (
      <Card key={item.id}sx={{ minWidth: 275, maxWidth: 400 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item.part.title}
          </Typography>
          <Typography variant="h5" component="div">
            ${item.part.price}
          </Typography>
         
          <Typography variant="body2">
            {item.part.year}, {item.part.make}, {item.part.model}
            <br />
            {item.part.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => onDelete(item.id)}>Remove From Watchlist</Button>
        </CardActions>
      </Card>
    );
  
}

export default Cart