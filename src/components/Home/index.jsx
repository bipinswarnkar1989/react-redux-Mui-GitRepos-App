import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './style.css';

const styles = theme => ( {
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
  button: {
    margin: theme.spacing.unit,
  },
});

class Appwrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: '3D Models',
      open: false,
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  handleSearchClick(){
     this.props.history.push(`/result?q=${this.state.input}`)
  }
  
  

  render() {
    const { classes } = this.props;
    const { open, input } = this.state;
    const { isLoading } = this.props.gitState;
   
    return (
      <div className={classes.root}>
      <div style={{display:'flex', top:70, justifyContent:'center', width:'90%', direction:'column'}}>
      <div style={{display:'block', width: '80%'}}>
      <form onSubmit={this.handleSearchClick} className="search">
  <input onChange={this.handleChange} value={input} type="text" placeholder="Search github users here.." name="search" />
  <button type="submit"><i className="fa fa-search"></i></button>
</form>
      </div>
      </div>
      </div>
    )
  }
};

export default withStyles(styles, { withTheme: true })(Appwrapper);