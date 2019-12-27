import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ProgressQuestion from '../components/ProgressQuestion';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    height: theme.spacing(12)
  },
  back: {
    display: 'flex',
    width: theme.spacing(12),
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1)
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: theme.spacing(2)
  },
  centerVertical: {
    display: 'flex',
    alignItems: 'center'
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
      <Grid item xs={10}>
        <Grid container>
          <Grid className={classes.centerVertical}>
            <Link>
              <div className={classes.back}>
                <ArrowBackIcon />
                <Typography>Atrás</Typography>
              </div>
            </Link>
          </Grid>
          <Grid>
            <Divider orientation="vertical" />
          </Grid>
          <Grid className={classes.centerVertical}>
            <div className={classes.title}>
              <Typography variant="h6">{props.title}</Typography>
              <Typography variant="subtitle1">{props.subTitle}</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <ProgressQuestion total={5} avance={1} />
      </Grid>
    </Grid>
  );
};

export default Toolbar;
