import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



function Cart({part}) {
  
    return (
      <Card key={part.id}sx={{ minWidth: 275, maxWidth: 400 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {part.title}
          </Typography>
          <Typography variant="h5" component="div">
            ${part.price}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            {part.year}, {part.make}, {part.model}
            <br />
            {part.description}
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