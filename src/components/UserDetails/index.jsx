import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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

class UserDetails extends Component {
  componentDidMount(){
    const queryParams = this.props.match.params;
    const q = queryParams.user;
    console.log(q);
    this.props.mappedrequestGetGitRepos(q);
  }
  dateFormat(d) {
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];
    const date = new Date(d);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return `${monthNames[monthIndex]} ${day} , ${year}, ${time}`;
  }
  render() {
    const { classes, models } = this.props;
    const { gitRepos, isLoading } = this.props.gitState;
    return (
      <div className={classes.root}>
      <div className="UsersDiv">
      <div className="Loader">
        {isLoading &&
           <CircularProgress/>
        }
      </div>
      {gitRepos && gitRepos[0].owner &&
         <div style={{display:'flex', justifyContent:'center'}}>
         <div style={{display:'flex', flexDirection:'row'}}>
            <div>
            <Avatar alt={gitRepos[0].owner.login} src={gitRepos[0].owner.avatar_url} />
            </div>
             <div style={{display:'flex', flexDirection:'column', alignSelf:'center', padding: 4}}>
               <span style={{fontSize: 18}}>{gitRepos[0].owner.login}</span>
             </div>
         </div>
         </div>
      }
      
      <div className="reposList">
      {gitRepos &&
      <List subheader={<ListSubheader>Repositories</ListSubheader>}>
      {gitRepos.map(r => {
            return (
              <Card key={r.id} style={{marginBottom: 5}}>
              <ListItem alignItems="flex-start" >
        <ListItemText
          primary={
            <React.Fragment>
             <a style={{textDecoration:'none', fontWeight:430}} href={r.html_url} target="__blank">{r.name}</a>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
               {r.description}
              </Typography>
              <span style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', width: '98%'}}>
              <span>Type: {r.private ? 'Private' : 'Public'}</span>
              <span>Created on {this.dateFormat(r.created_at)}</span>
              <span>Updated on {this.dateFormat(r.updated_at)}</span>
              <span>Size: {r.size}</span>
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

export default withStyles(styles, { withTheme: true })(UserDetails);