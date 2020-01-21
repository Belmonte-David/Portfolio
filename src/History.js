import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='content'>
                <NavBar />                
                <div className='Block'>
                <h1 className='Titles'>De comédien à codeur !</h1>
                <br/>
                    <p >Depuis mon plus jeune âge, j'ai deux passions : Le Théâtre et l'Informatique. J'ai eu la chance de pouvoir faire le métier de comédien pendant 9 ans et aujourd'hui j'ai décidé de me consacrer pleinement à ma deuxième passion !</p>
                    <p>Jusqu'à présent, je croyais que le métier de développeur m'était inaccessible : Il fallait avoir suivi un cursus scolaire scientifique et des études post-bac en IUT ou école d'ingénieurs. Avec un baccalauréat Sciences Médico-Sociales et un diplôme d'éducateur, j'étais loin de pouvoir prétendre à de telles formations...</p>
                    <p>Mais, depuis peu, de nouvelles écoles ont vu le jour et proposent de former de futurs développeurs web en quelques mois ( et sans condition de diplômes ) ; une aubaine pour des candidats ayant un profil similaire au mien !</p>
                    <p>J'ai donc décidé d'intégrer, au mois de février 2019, une formation de 5 mois au sein de la Wild Code School. Cette école a pour but d'enseigner le métier de développeur web : Nous choisissons un langage (pour ma part, le JavaScript) et un framework (j'ai choisi la librairie 'React'). J'ai eu  aussi l'occasion d'avoir un certain nombre de cours sur le back-end (NodeJs, Mysql, Express), l'agilité (SCRUM), etc.</p>
                    <p>Ces 5 mois ont été très intensifs mais passionnants ! J'ai appris beaucoup de choses et, après avoir effectuer un stage de 5 mois sur une autre technologie (React Native), j'ai hâte de continuer à solidifier toutes les bases que j'ai pu acquérir ! Je serai d'ailleurs en recherche d'emploi en tant que développeur web junior dès mi-février, donc n'hésitez pas à me contacter : Je serai enchanté de faire votre connaissance ! </p>
                </div>
            </div>
        );
    }
}

export default History;
