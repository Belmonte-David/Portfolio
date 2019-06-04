import React, { Component } from 'react';
import NavBar from './NavBar';
import ImageAvatars from './ImagesAvatars';
import Grid from '@material-ui/core/Grid';




class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <Grid >             
                <NavBar/>                 
                <div className='Cover'> 
                        <ImageAvatars  className='Avatar'/>                        
                        <h1 className='CoverTitle'>David Belmonte</h1>
                        <h3 >Développeur Web Junior Javascript/React</h3>                                         
                </div>           
            </Grid>
        );
    }
}

export default Cover;