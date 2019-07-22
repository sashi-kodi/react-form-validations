 import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const MyCard = (props)=>{

  return (
    <Card classes={{root:'mdc-card'}} style={{margin:'auto'}}>
      <CardActionArea>
        <CardMedia
          image="https://unsplash.com/photos/5DB3cYe7Nxk"
          title="Contemplative Reptile"
        />
        <CardContent className='demo-card__primary'>
          <Typography gutterBottom variant="h5" component="h2" className="demo-card__title">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="demo-card__secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
        
export default MyCard;