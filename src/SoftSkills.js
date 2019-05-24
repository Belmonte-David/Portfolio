import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Adaptabilite from './images/Adaptabilite.jpeg';
import Curiosite from './images/Curiosite.jpeg';
import Patience from './images/Patience.png';
import Rigueur from './images/Rigueur.jpeg';
import Perseverance from './images/Perseverance.jpg';
import Relationnel from './images/Relationnel.jpg';
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

function SoftSkills(props) {
  const { classes } = props;
  return (
  <List className={classes.root}>
    <Grid container spacing={16}>
    <Grid item xs={12} md={6}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Adaptabilite} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>Adaptabilité</p></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Curiosite} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>Curiosité</p></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Patience} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>Patience</p></ListItemText>
          </ListItem>
          </Grid>
          <Grid item xs={12} md={6}>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Rigueur} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>Rigueur</p></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Perseverance} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>Persévérance</p></ListItemText>
          </ListItem>           
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Relationnel} />
        </ListItemAvatar>
        <ListItemText><p className='TexteSkills'>Relationnel</p></ListItemText>
          </ListItem>
          </Grid>         
          </Grid>
         </List> 
    
 );
}

SoftSkills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SoftSkills);
