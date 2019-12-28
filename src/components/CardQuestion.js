import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AnimationPlay from './AnimationPlay';
import { makeStyles } from '@material-ui/core/';
import manWebcam from '../assets/images/man-webcam(650x360).png';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: theme.spacing(90),
    height: theme.spacing(80),
    padding: theme.spacing(3)
  },
  header: {
    display: 'flex',
    height: theme.spacing(10),
    justifyContent: 'space-between'
  },
  video: {
    display: 'flex',
    width: theme.spacing(80),
    height: theme.spacing(45),
    backgroundColor: '#868888' //theme.palette.grey[300]
  },
  number: {
    width: theme.spacing(10),
    color: theme.palette.secondary.main,
    padding: theme.spacing(0, 3, 0, 0)
  },
  title: {
    width: theme.spacing(74),
    textAlign: 'right'
  },
  img: {
    zIndex: 20,
    opacity: 0.8,
    filter: 'brightness(0.5)'
  }
}));

const CardQuestion = () => {
  const classes = useStyles();
  const props = {
    number: 1,
    title: '¿Cuáles son las primeras diferencias que encuentras entre UX y UI?'
  };
  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <div>
          <Typography variant="h3" className={classes.number}>
            {props.number}
          </Typography>
        </div>
        <div className={classes.title}>
          <Typography variant="h5">{props.title}</Typography>
        </div>
      </div>
      <CardContent>
        <div className={classes.video}>
          {/* <img src={manWebcam} className={classes.img} /> */}
          <AnimationPlay />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardQuestion;
