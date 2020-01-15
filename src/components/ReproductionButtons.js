import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';
import StopIcon from '@material-ui/icons/Stop';
import Tooltip from '@material-ui/core/Tooltip';

const sizeSide = 40;
const useStyle = makeStyles(theme => ({
  button: {
    width: sizeSide,
    height: sizeSide,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    margin: '4px'
  },
  icon: {
    color: 'white'
  },
  contentButtons: {
    display: 'flex'
  }
}));

const ReproductionButtons = () => {
  const classes = useStyle();
  return (
    <div className={classes.contentButtons}>
      <Tooltip title="pausar">
        <div className={classes.button}>
          <PauseIcon className={classes.icon} />
        </div>
      </Tooltip>
      <Tooltip title="reiniciar">
        <div className={classes.button}>
          <ReplayIcon className={classes.icon} />
        </div>
      </Tooltip>
      <Tooltip title="detener">
        <div className={classes.button}>
          <StopIcon className={classes.icon} />
        </div>
      </Tooltip>
    </div>
  );
};

export default ReproductionButtons;
