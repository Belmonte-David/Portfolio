import React, { Component } from 'react';
import NavBar from './NavBar';
import ImageAvatars from './ImagesAvatars';


class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <NavBar/> 
                <div> 
                   <div  className='Cover'>                        
                        <ImageAvatars  className='Avatar'/>
                        <h1 className='CoverTitle'>David Belmonte</h1>
                        <h3 >Développeur Web Junior Javascript/React</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cover;