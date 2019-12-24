import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit * 9,
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 7,
    overflowX: 'hidden'
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
          {props.children}
        </main>
      </div>
      <Sidebar open={open} drawerWidth={drawerWidth} />
    </Fragment>
  );
};

export default MainLayout;
