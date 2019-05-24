import React, { Component } from 'react';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills'
import NavBar from './NavBar';


class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar/>                
                <div className='Block'>
                    <h2 className='SkillsTitles'>Compétences Techniques</h2>
                    < HardSkills />
                    <br />
                    <h2 className='SkillsTitles'>Compétences Sociales</h2>
                    < SoftSkills/>
                </div>
            </div>
            );
    }
}
 
export default Skills;