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
            <div>
                <NavBar />                
                <div className='Block'>
                <h1 className='Titles'>De comédien à codeur !</h1>
                <br/>
                    <p>Depuis mon plus jeune âge, j'ai deux passions : Le Théâtre et l'Informatique. J'ai eu la chance de pouvoir faire le métier de comédien pendant 9 ans et aujourd'hui j'ai décidé de me consacrer pleinement à ma deuxième passion !</p>
                    <p>Jusqu'à présent, je croyais que le métier de développeur m'était inaccessible : Il fallait avoir suivi un cursus scolaire scientifique et des études post-bac en IUT ou école d'ingénieurs. Avec un baccalauréat Sciences Médico-Sociales et un diplôme d'éducateur, j'étais loin de pouvoir prétendre à de telles formations...</p>
                    <p>Mais, depuis peu, de nouvelles écoles ont vu le jour et proposent de former de futurs développeur web en quelques mois ( et sans conditions de diplômes ) ; une aubaine pour des candidats ayant un profil similaire au mien !</p>
                    <p>J'ai donc décidé d'intégrer, au mois de février, une formation de 5 mois au sein de la Wild Code School. Cette école nous apprend le métier de développeur web : Nous choisissons un langage (pour ma part, le JavaScript) et un framework (j'ai choisi la librairie 'React'). Nous avons aussi un certain nombres de cours sur du back-end (NodeJs, Mysql, Express), l'agilité (SCRUM), etc.</p>
                    <p>Ces 5 mois sont très intensifs mais passionnants ! On apprend beaucoup de choses et j'ai hâte de pouvoir solidifier toutes ces bases à la sortie de la formation ! Je suis d'ailleurs en recherche d'un stage ou CDI en tant que développeur web junior dès le mois d'août, donc n'hésitez pas à me contacter, je serai enchanté de faire votre connaissance ! </p>
                </div>
            </div>
        );
    }
}

export default History;