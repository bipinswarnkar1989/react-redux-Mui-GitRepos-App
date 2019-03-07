import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import './style.css';


const styles = theme => ({
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
  inline: {
    display: 'inline',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class UserResults extends Component {
  componentDidMount(){
    const queryParams = new URLSearchParams(this.props.history.location.search);
    const q = queryParams.get('q');
    console.log(q);
    this.props.mappedrequestGetGitUsers(q);
  }
  render() {
    const { classes, models } = this.props;
    const { gitUsers, isLoading } = this.props.gitState;
    return (
      <div className={classes.root}>
      <div className="reasultsDiv">
      <h3>Results :</h3>
      <div className="Loader">
        {isLoading &&
           <CircularProgress/>
        }
      </div>
      
      <div className="usersList">
      {/* {gitUsers &&
        gitUsers.map(u => {
            return (
                <div key={u.id} className="card--content">
      <img src={u.avatar_url}/>
                </div>
            )
        })
      } */}
      {gitUsers &&
      <List>
      {gitUsers.map(u => {
            return (
              <Card key={u.id} style={{marginBottom: 5}}>
              <ListItem key={u.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={u.login} src={u.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={u.login}
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
              Score: {u.score}
              </Typography>
              <span style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', width: '50%'}}>
              <Button variant="contained" href={u.html_url} className={classes.button}>
                Profile
              </Button>
              <Button variant="contained" href={`/details/${u.login}`} className={classes.button}>
                Details
              </Button>
              </span>
            </React.Fragment>
          }
        />
        </ListItem>
        </Card>
            )
          }
      )
        }
        </List>
      }
      </div>
      </div>
      </div>
    )
  }
};

export default withStyles(styles, { withTheme: true })(UserResults);