import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { RootState } from '../../../redux/store';
import { ApplicationState } from '../../../redux/application/states';
import { ActionTypes as ApplicationActionTypes} from '../../../redux/application/actions';
import { ActionTypes as AuthActionTypes} from '../../../redux/auth/actions';
import AlertModal from '../AlertModal/AlertModal';

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

interface ComponentProps {
  classes: any;
}

interface DispatchProps {
  toggleSidebar(): void,
  signOutUser(): void,
}

type Props = StateProps & ComponentProps & DispatchProps;

class Header extends Component<Props> {
  
  state = {
    isLogoutModalOpen: false,
  };
  
  handleAuthModalClose = () => {
    this.setState({
      isLogoutModalOpen: false,
    });
  };
  
  handleAuthModalConfirm = () => {
    this.props.signOutUser();
    this.handleAuthModalClose();
  };
  
  handleAuthModalOpen = () => {
    this.setState({
      isLogoutModalOpen: true,
    });
  };
  
  render() {
    const {classes, toggleSidebar} = this.props;
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
            <Button color="inherit" onClick={this.handleAuthModalOpen}>Logout</Button>
          </Toolbar>
        </AppBar>
        <AlertModal
          open={this.state.isLogoutModalOpen}
          title={"Are you sure you want to logout?"}
          handleClose={this.handleAuthModalClose}
          handleConfirm={this.handleAuthModalConfirm}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  application: state.application,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => (
  {
    toggleSidebar: () => {
      dispatch({type: ApplicationActionTypes.TOGGLE_SIDEBAR});
    },
    signOutUser: () => {
      dispatch({type: AuthActionTypes.SIGN_OUT});
    },
  }
);

const componentWithStyles = withStyles(styles)(Header);

export default connect(mapStateToProps, mapDispatchToProps)(componentWithStyles);