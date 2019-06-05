import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

class BurgerMenu extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="burgerMenu">                         
        '<NavLink exact to="/" className="button">
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
        </NavLink>'
        </div> );
    }
}
 
export default BurgerMenu ;
