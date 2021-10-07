import Home from "./Home";
import Grid from '@mui/material/Grid';

function HomeContainer({ fullPartList, handleAddToCart, user }) {


  return (

    <div style={{marginLeft: '-8vw', width:'74vw'}}>
      <Grid container spacing={5}
      sx={{
          marginTop: '40vw',
        bgcolor: "black",
        margin: '0 auto'
      }}
      >

    {fullPartList !== []
      ? fullPartList.map((part) => (
          <><Grid item xs={12} md={6} lg={4}>
            <Home part={part} handleAddToCart={handleAddToCart} user={user} />
            </Grid>
          </>
        ))
      : <p>'Loading'</p>}
          
    </Grid>
    </div>
  );
}

export default HomeContainer;
