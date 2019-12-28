import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  circle: {
    /* width: theme.spacing(20),
    height: theme.spacing(20),
    backgroundColor: 'rgba(250, 250, 250,0.2)',
    borderRadius: '50%',
    display: 'block',
    border: '3px solid rgba(250, 250, 250,0.9)' */
  },
  growingCircle: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    backgroundColor: 'rgba(250, 250, 250,0.2)',
    borderRadius: '50%',
    display: 'block',
    border: '3px solid rgba(250, 250, 250,0.9)'
  },
  transparent: {
    fill: 'rgba(250, 250, 250, 0.3)'
  },
  textCircle: {
    fill: 'white',
    fontWeight: 'bold'
  }
}));

const AnimationPlay = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg width="160" height="160" class="svg">
        Iniciar
        <circle
          id="circle-2"
          cx="50%"
          cy="50%"
          r="78"
          stroke="rgba(250,250,250,0.7)"
          stroke-width="4"
          className={(classes.circle, classes.transparent)}
          /* classes.circle--2, */
        ></circle>
        <circle
          id="circle-1"
          cx="50%"
          cy="50%"
          r="50"
          stroke="rgba(250,250,250,1)"
          stroke-width="4"
          className={(classes.circle, classes.transparent)}
        ></circle>
        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          className={classes.textCircle}
        >
          Iniciar
        </text>
      </svg>
    </div>
  );
};

export default AnimationPlay;
