import React from "react";
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../assets/images/logo-krowdy-135x68.png";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../assets/images/avatar.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
      >
        <Toolbar className={classes.toolbar}>
          <img src= {logo} alt="logo krowdy"/>
          <div>
          <Typography
            variant="title"
            color="inherit"
            noWrap
          >Walther Ayala</Typography>
            <IconButton color="inherit">
            <Avatar alt="Remy Sharp" src={avatar} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
