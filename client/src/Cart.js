import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




function Cart({item}) {
  
    return (
      <Card key={item.id}sx={{ minWidth: 275, maxWidth: 400 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="h5" component="div">
            ${item.price}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            {item.year}, {item.make}, {item.model}
            <br />
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Remove From Cart</Button>
        </CardActions>
      </Card>
    );
  


  
  
  // return(
  //   <p></p>
  // )
}

export default Cart