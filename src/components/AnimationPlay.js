import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const widthComponent = 250;

const useStyles = makeStyles(theme => ({
  root: {
    width: widthComponent,
    height: widthComponent,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'flex-column',
    flexWrap: 'wrap'
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
  },
  message: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: 'white'
  }
}));

const AnimationPlay = props => {
  const classes = useStyles();
  const [radio, setRadio] = useState(50);
  const [expading, setExpading] = useState(true);

  useEffect(() => {
    setTimeout(function() {
      if (radio <= 78 && expading) {
        setRadio(radio + 1);
        if (radio === 78) {
          setExpading(false);
        }
      } else if (radio === 0 && !expading) {
        setRadio(radio + 1);
        setExpading(true);
      } else {
        setRadio(radio - 1);
      }
    }, 80);
  }, [setRadio, radio, expading]);
  return (
    <div className={classes.root}>
      <svg width={widthComponent} height="160" class="svg">
        Iniciar
        <circle
          id="big-circle"
          cx="50%"
          cy="80"
          r="78"
          stroke="rgba(250,250,250,0.7)"
          stroke-width="4"
          className={(classes.circle, classes.transparent)}
          /* classes.circle--2, */
        ></circle>
        <circle
          id="animated-circle"
          cx="50%"
          cy="80"
          r={radio}
          stroke="rgba(250,250,250,1)"
          stroke-width="4"
          className={(classes.circle, classes.transparent)}
        ></circle>
        <text
          x="50%"
          y="80"
          dominant-baseline="middle"
          text-anchor="middle"
          className={classes.textCircle}
        >
          Iniciar
        </text>
      </svg>
      <div className={classes.message}>
        <Typography variant="subtitle2">{props.message}</Typography>
      </div>
    </div>
  );
};

export default AnimationPlay;
