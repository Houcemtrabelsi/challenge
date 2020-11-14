import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Cocktail.css'
import {Link} from "react-router-dom"


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    height:400,
    
  },
  media: {
    height: 140,
  },
});

export default function Cocktail({cocktails}) {
  const classes = useStyles();

  return (
      <div className="card">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cocktails.strDrinkThumb}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cocktails.strDrink}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cocktails.strInstructions}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          <Link to={`/Cocktail/${cocktails.idDrink}`}>
          Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
