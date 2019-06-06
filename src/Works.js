import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paques from './images/Paques.png';
import Yoshilogo from './images/Yoshilogo1.png';
import PokeReact1 from './images/Pokereact1.png';
import Appmobile from './images/Appmobile.png';
import './App.css';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

                 
  const useStyles = theme => ({
    card: {
      backgroundColor: '#000000BB',
      maxWidth: 345,
      
    },
    media: {
      height: 140,
      
    },
    root: {
      flexGrow: 1,
      
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)', 
          
    },
    typo: {
      color:'rgb(173, 173, 173)'
    } 
    });
  
  function Works(props) {
    const { classes } = props;
  
  return (
    <Fragment>
    <NavBar/>
    <div className='Block'>
        <h1 className='Titles'>Réalisations</h1>
        <br />
        <br />
        <Grid container >
        <Grid item xs={12} sm={6}>
       <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Appmobile}
          title="e-learning"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typo}>
          E-Learning
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typo}>
          Réalisation en équipe d'une application mobile de e-learning en Javascript/React (8 semaines) pour un client réel.
          </Typography>          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <NavLink to='/Works'><Button className='buttonColor'>Prochainement</Button></NavLink>         
      </CardActions>
    </Card>     
    </Grid>   
    <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={PokeReact1}
          title="PokeReact"
        />
        <CardContent className='CardContent'>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typo}>
          PokeReact
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typo}>
          Réalisation en équipe d’un jeu vidéo multijoueur Pokémon en Javascript/React (5 semaines). 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.typo}>
      <NavLink to='/pokeReact'><Button className='buttonColor'>En savoir +</Button></NavLink>
    </CardActions>
    </Card>
    </Grid>    
    <Grid item xs={12} sm={6}>   
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Paques}
          title="EggsPlosive"
        />
        <CardContent className='CardContent'>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typo}>
          EggsPlosives
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typo}>
          Hackaton 24h : Réalisation en équipe d’un jeu en Javascript/React à partir d’une API sur le thème de Pâques. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.typo}>
      <NavLink to='/eggsPlosive'><Button className='buttonColor'>En savoir +</Button></NavLink>         
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6}>   
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Yoshilogo}
          title="Yoshi"
        />
        <CardContent className='CardContent'>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typo}>
          Yoshi : Save the Baby !
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typo}>
          Réalisation en équipe d’un site de vente en ligne (3 semaines). Utilisation d'Html, CSS, Bootstrap et Javascript Vanilla.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.typo}>
      <NavLink to='/yoshi'><Button className='buttonColor'>En savoir +</Button></NavLink>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </div>
    </ Fragment >
  );
}
             
export default withStyles(useStyles)(Works);




