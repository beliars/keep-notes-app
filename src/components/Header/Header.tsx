//import React from 'react';
//
//import './Header.scss';
//import Button from '@material-ui/core/Button/Button';
//
//const Header = () => {
//    return (
//      <header className="app-header">
//        <Button variant="contained" color="primary">
//          Hello World
//        </Button>
//      </header>
//    );
//};
//
//export default Header;


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

export interface Props extends WithStyles<typeof styles> {}

interface State {
  open: boolean;
}

class Header extends Component<Props, State> {
  state = {
    open: false,
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={`${classes.root} app-header`}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Keep notes
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}

export default withStyles(styles)(Header);