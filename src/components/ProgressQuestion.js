import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  item: {
    padding: 4
  },
  progress: {
    borderRadius: 25
  }
}));

const ProgressQuestion = props => {
  const classes = useStyles();
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted((100 / props.total) * props.avance);
  }, [props.total, props.avance]);

  return (
    <Grid container className={classes.root}>
      <Grid item spacing={1} className={classes.item}>
        Preguntas Resueltas
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <LinearProgress
          variant="determinate"
          value={completed}
          color="primary"
          className={classes.progress}
        />
      </Grid>
      <Grid item className={classes.item}>
        {props.avance} / {props.total}
      </Grid>
    </Grid>
  );
};

export default ProgressQuestion;
