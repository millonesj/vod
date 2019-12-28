import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Button from '@material-ui/core/Button';
import CardQuestion from './CardQuestion';
import AnimationPlay from './AnimationPlay';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  top: {
    color: '#FFFFFF',
    display: 'flex',
    padding: theme.spacing(3, 2),

    height: theme.spacing(25),
    width: '100%',
    backgroundColor: '#002766'
  },
  rowHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '30%'
  },
  content: {
    backgroundColor: '#F00',
    display: 'flex',
    width: '100%'
  },
  showQuestions: {
    display: 'flex',
    alignItems: 'center'
  },
  iconQuestion: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    minWidth: theme.spacing(5),
    minHeight: theme.spacing(5),
    marginLeft: theme.spacing(2)
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
      <Grid item xs={12} className={classes.top}>
        <div className={classes.rowHeader}>
          <div>
            <Typography variant="h6">
              Cuestionario para Diseñador UX / UI
            </Typography>
          </div>
          <div className={classes.showQuestions}>
            <Typography variant="subtitle1">Ver preguntas</Typography>
            <Button variant="contained" className={classes.iconQuestion}>
              <ViewModuleIcon />
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} className={classes.content}>
        <CardQuestion />
        <AnimationPlay></AnimationPlay>
      </Grid>
    </Grid>
  );
};
export default Toolbar;
