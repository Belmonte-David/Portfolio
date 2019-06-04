import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import './App.css';

const styles = {
  root: {
    background: 'transparent',    
  },
};

class NavBar extends Component {
 
  render() {
      const { classes } = this.props;
    return (
      <div>
        <AppBar 
          classes={{
            root: classes.root, // class name, e.g. `classes-nesting-root-x`
            positionFixed: true,
          }}
          >        
          <Toolbar className='navBar'>
           <Grid container  > 
          <Grid item xs={6} sm={3}  >
             <NavLink exact to="/" className="button">              
                Accueil             
            </NavLink>
          </Grid>   
          <Grid item xs={6} sm={3}>
            <NavLink to="/History" className="button">             
                De comédien à codeur    
            </NavLink>
            </Grid>   
          <Grid item xs={6} sm={3}>
            <NavLink to="/Skills" className="button">            
                Compétences       
            </NavLink>
            </Grid>   
          <Grid item xs={6} sm={3}>
            <NavLink to="/Works"className="button">     
               Réalisations      
            </NavLink>
            </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
      </div>     
     );
  }
}

export default withStyles(styles)(NavBar);

