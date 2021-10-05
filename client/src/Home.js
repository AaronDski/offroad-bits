import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';





function Home({part,handleAddToCart, user}) {
  
    return (
      <div key={part.id}>
      <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardMedia
      component="img"
      height="300"
      image={part.image}
      alt="No Image Provided"
    />
        <CardContent key={part.id}>
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
          <Button size="small" onClick={() => handleAddToCart(part, user)}>ADD TO WATCHLIST</Button>
        </CardActions>
      </Card>
      
  </div>

    );

}

export default Home
