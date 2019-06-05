import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
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
            <div className="menu">                         
            <NavLink exact to="/" className="button">
              Accueil
            </NavLink>
            <NavLink to="/History" className="button">
              De comédien à codeur
            </NavLink>
            <NavLink to="/Skills" className="button">
              Compétences
            </NavLink>
            <NavLink to="/Works" className="button">
              Réalisations
            </NavLink>
            </div>
            <div className='sideBarToggle'>
            <NavLink to="/burgerMenu"  className='burger'>
            <button type="button" className="RoundBtn">
              <FontAwesomeIcon icon={faBars} />
            </button></NavLink></div> 
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);

