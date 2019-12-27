import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Start from '../containers/Start';

const drawerWidth = 72;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1
  },
  toolbar: {
    display: 'flex',
    height: theme.spacing(9),
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
    ...theme.mixins.toolbar
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

const MainLayout = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleToggleDrawer = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  return (
    <Fragment>
      <div>
        <Header handleToggleDrawer={handleToggleDrawer} />
        <main className={clsx(classes.content, classes.contentShift)}>
          <div className={classes.toolbar} />
          {props.children}
          <Start></Start>
        </main>
      </div>
      <Sidebar open={open} drawerWidth={drawerWidth} />
    </Fragment>
  );
};

export default MainLayout;
