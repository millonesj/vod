import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ProgressQuestion from './ProgressQuestion';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  back: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px'
  }
}));

const Toolbar = () => {
  const classes = useStyles();
  const props = {};
  props.title = 'Video Cuestionario';
  props.subTitle =
    'BCP - Sub Gerente de Ingeniería de Defensa de Ciberseguridad.';
  return (
    <Grid container className={classes.root} alignContent="space-between">
      <Grid item xs={8}>
        <Grid container>
          <Grid>
            <div className={classes.back}>
              <ArrowBackIcon />
              <Typography>Atrás</Typography>
            </div>
          </Grid>
          <Grid>
            <Divider orientation="vertical" />
          </Grid>
          <Grid>
            <div className={classes.back}>
              <Typography variant="h6">{props.title}</Typography>
              <Typography variant="subtitle1">{props.subTitle}</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <ProgressQuestion total={5} avance={1} />
      </Grid>
    </Grid>
  );
};

export default Toolbar;
