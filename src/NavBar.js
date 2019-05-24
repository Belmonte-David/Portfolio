import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import './App.css';

const styles = {
  root: {
    background: 'transparent',    
  },
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


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
             <NavLink exact to="/" className="button">              
                Accueil             
            </NavLink>
            <NavLink to="/History" className="button">             
                Bio    
            </NavLink>
            <NavLink to="/Skills" className="button">            
                Compétences       
            </NavLink>
            <NavLink to="/Works"className="button">     
               Réalisations      
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);

