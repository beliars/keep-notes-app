import React from 'react';
import { connect } from 'react-redux';

import { createStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { RootState } from '../../redux/store';
import { ApplicationState } from '../../redux/application/states';
import { ActionTypes } from '../../redux/application/actions';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

interface StateProps {
  application: ApplicationState,
}

interface DispatchProps {
  toggleSidebar(): void,
}

type Props = StateProps & DispatchProps;

function Header(props: any) {
  const {classes, toggleSidebar} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleSidebar}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Keep notes
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state: RootState): StateProps => ({
  application: state.application,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => (
  {
    toggleSidebar: () => {
      dispatch({type: ActionTypes.TOGGLE_SIDEBAR});
    },
  }
);

const componentWithStyles = withStyles(styles)(Header);

export default connect(mapStateToProps, mapDispatchToProps)(componentWithStyles);