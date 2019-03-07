import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './style.css';

const styles = {
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
};

class Appwrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: 'Goomo',
      routePath: null
    };
  }

  componentDidMount(){
    this.setState({
      routePath:this.props.history.location.pathname
    })
    this.props.history.listen(location => {
      console.log(location.pathname) // /home
      this.setState({
        routePath:location.pathname
      })
    })
  }
  goBack(){
    this.props.history.push('/');
  }  

  render() {
    const { classes } = this.props;
    const { appTitle, routePath } = this.state;
   
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
        <Toolbar>
          {routePath && routePath !== '/' &&
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <ArrowBackIcon onClick={() => this.goBack()} />
            </IconButton>
          }
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {appTitle}
          </Typography>
          
        </Toolbar>
      </AppBar>     
      </div>
    )
  }
};

export default withStyles(styles, { withTheme: true })(Appwrapper);