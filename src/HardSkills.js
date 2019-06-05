import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Html5 from './images/Html5.png';
import Css3 from './images/Css3.svg';
import JavascriptReact from './images/JavascriptReact.png';
import Redux from './images/Redux.png';
import NodeJs from './images/NodeJs.png';
import MySql from './images/MySql.png';
import Git from './images/Git.png';
import Scrum from './images/Scrum.png';
import Grid from '@material-ui/core/Grid';
import './App.css';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'transparent',
    margin: 'auto auto'    
  },
  inline: {
    display: 'inline',
  },
});

function HardSkills(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
    <Grid container spacing={16}>
    <Grid item xs={12} md={6}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Html5" src={Html5} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>HTML5</p></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Css3" src={Css3} />
          </ListItemAvatar>
          <ListItemText><p className='TexteSkills'>CSS3</p></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="React" src={JavascriptReact} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>React</p></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Redux" src={Redux} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>Redux</p></ListItemText>
          </ListItem>
          </Grid>
          <Grid item xs={12} md={6}>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="NodeJs" src={NodeJs} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>Node.js</p></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="MySql" src={MySql} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>MySQL</p></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Git" src={Git} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>Git</p></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Scrum" src={Scrum} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>Scrum</p></ListItemText>
          </ListItem>
          </Grid>         
          </Grid>
         </List>    
 );
}

HardSkills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HardSkills);

        