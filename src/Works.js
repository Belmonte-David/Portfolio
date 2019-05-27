import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardBody} from 'reactstrap';
import './App.css';
import Paques from './images/Paques.png';
import Yoshilogo from './images/Yoshilogo1.png';
import PokeReact from './images/Pokereact.png';
import Appmobile from './images/Appmobile.png';

class Works extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }    

    render() {
        return (
            <Fragment>
                <NavBar/>
                <div className='Block'>
                    <h1 className='Titles'>Réalisations</h1>
                    <br />
                    <br />
                    <CardGroup>
                    <Card>
                            <CardImg top width="100%" src={Appmobile} alt="Card image cap" />
                            <CardBody className='CardBody'>
                                <CardTitle className='titleReal'>Plateforme mobile d'e-Learning</CardTitle>
                                <CardText>Réalisation en équipe d'une application mobile en Javascript/React (8 semaines) pour un client réel.</CardText>
                                <NavLink to='/works'><Button className='buttonColor'>En savoir +</Button></NavLink>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={PokeReact} alt="Card image cap" />
                            <CardBody className='CardBody' >
                                <CardTitle className='titleReal'>PokeReact</CardTitle>
                                <CardText>Réalisation en équipe d’un jeu vidéo multijoueur Pokémon en Javascript/React (5 semaines). </CardText>
                                <NavLink to='/pokeReact'><Button className='buttonColor'>En savoir +</Button></NavLink>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={Paques} alt="Card image cap" />
                            <CardBody className='CardBody'>
                                <CardTitle className='titleReal'>EggsPlosives</CardTitle>
                                <CardText>Hackaton 24h : Réalisation en équipe d’un jeu en Javascript/React à partir d’une API sur le thème de Pâques. </CardText>
                                <NavLink to='/eggsPlosive'><Button className='buttonColor'>En savoir +</Button></NavLink>
                            </CardBody>
                        </Card>                        
                        <Card>
                            <CardImg top width="100%" src={Yoshilogo} alt="Card image cap" />
                            <CardBody className='CardBody'>
                                <CardTitle className='titleReal'>Yoshi : Save the Baby !</CardTitle>
                                <CardText>Réalisation en équipe d’un site de vente en ligne (3 semaines). Utilisation d'Html, CSS, Bootstrap et Javascript Vanilla.</CardText>
                                <NavLink to='/yoshi'><Button className='buttonColor'>En savoir +</Button></NavLink>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </ Fragment >
        );
    }
}

export default Works;




