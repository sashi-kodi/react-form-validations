import React from 'react';
import Grid from '@material-ui/core/Grid';
import MyCard from './Card';
import MyButton from './Button';

const MyGrid = ()=>{
    return(
    <Grid container spacing={3}>
        <Grid item xs={12}>
           <MyButton />
        </Grid>
        <Grid item xs={12}>
          <MyCard />
        </Grid>
    </Grid>
    )
}
export default MyGrid;