import React, { Component } from 'react';
import Cover from './Cover';
import History from './History';
import Skills from './Skills';
import Works from './Works';
import BurgerMenu from './BurgerMenu';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (     
      <div className='BackGround'>               
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Cover} />
          <Route path="/history" component={History} />
          <Route path="/skills" component={Skills} />
          <Route path="/works" component={Works} />
          <Route path='/pokeReact' component={() => { 
     window.location.href = 'https://wildcodeschool.github.io/lyon-0219-react-PokeReact/#/'; 
     return null;
}}/>
          <Route path='/eggsPlosive' component={() => { 
     window.location.href = 'http://eggsplosive.herokuapp.com/'; 
     return null;
}}/>
          <Route path='/portfolio' component={Cover}/>
          <Route path='/yoshi' component={() => { 
     window.location.href = 'https://bepatest.github.io/Yoshi-save-the-baby/'; 
     return null;
}}/>
          <Route path="/burgerMenu" component={BurgerMenu} />
        </Switch>      
      </BrowserRouter>
            
      </div>       
    );
  }
}
 
export default App;


