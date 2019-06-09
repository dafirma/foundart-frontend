import React from 'react';
import '../stylesheets/Item.css';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function Item(props) {
  const classes = useStyles();
  const article = props;
  const image = article.imgPath
  //console.log(article)

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Favorite
        </Button>
        <Button size="small" color="primary">
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}




/* 
<div className='container-item-item'>
<li>
  <Link to={{pathname:`/article/${article._id}`, state:{article}}} >
    <div>
      <img className="image-item" src={article.image} alt=''/>
    </div>
  </Link>
  <p>{article.price}</p>
  <p>{article.title}</p>
  <p>{article.description}</p>
  <button onClick={() => this.clickFav(article._id)}>Favorite</button>
</li>
</div> */