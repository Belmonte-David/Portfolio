import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paques from './images/Paques.png';
import Yoshilogo from './images/Yoshilogo1.png';
import PokeReact1 from './images/Pokereact1.png';
import Appmobile from './images/Appmobile.png';
import ColorSquad from './images/Color-squad.png';
import coverProducer from './images/coverProducer.png';
import './App.css';
import NavBar from './NavBar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = theme => ({
  card: {
    paddingLeft: 10,
    backgroundColor: 'transparent',
    maxWidth: 345,
  },
  cardArea: {
    backgroundColor: '#000000BB',
    marginTop: 20
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
  typo: {
    color: 'rgb(173, 173, 173)'
  }
});

function Works(props) {
  const { classes } = props;

  return (

    <Fragment>
      <NavBar />
      <div className='Block'>
        <h1 className='Titles'>Réalisations</h1>
        <br />
        <br />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <Card className={classes.cardArea}>
                <CardMedia
                  className={classes.media}
                  image={coverProducer}
                  title="Green Terroir"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.typo}>
                    Green Terroir
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.typo}>
                    Réalisation d'une application mobile en React Native avec Node.js et MongoDB.
          </Typography>
                </CardContent>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <Card className={classes.cardArea}>
                <CardMedia
                  className={classes.media}
                  image={ColorSquad}
                  title="color-squad"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.typo}>
                    Color-squad
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.typo}>
                    Réalisation d'un jeu pour mobile en Javascript/React avec Node.js et MongoDB.
          </Typography>
                </CardContent>
              </Card >
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <Card className={classes.cardArea}>
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
                    Réalisation en équipe d'une application mobile de e-learning en Javascript/React pour un client réel.
          </Typography>
                </CardContent>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <Card className={classes.cardArea}>
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
                    Réalisation en équipe d’un jeu vidéo multijoueur Pokémon en Javascript/React.
          </Typography>
                </CardContent>
              </Card >
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <Card className={classes.cardArea}>
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
              </Card>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <Card className={classes.cardArea}>
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
                    Réalisation en équipe d’un site de vente en ligne. Utilisation d'Html, CSS, Bootstrap et Javascript Vanilla.
          </Typography>
                </CardContent>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </div>
    </ Fragment >
  );
}

export default withStyles(useStyles)(Works);
