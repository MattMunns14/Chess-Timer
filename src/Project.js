
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin:'auto',
    backgroundColor: '#FCF7F8',
    textAlign: 'left',    
  },
  media: {
    height: 140,
  },
});

export default function Project(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={props.link}>
        <CardMedia
          className={classes.media}
          image={props.image}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {props.title}
         </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p className = "contentParagraph">
            {props.description}
            </p>
          </Typography>
        </CardContent>
        </Link>
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