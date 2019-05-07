import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Portofolio from './Portofolio';
import Profile from './Profile';

class Main extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/portofolio' component={Portofolio}/>
            </Switch>                
        );
    }
}

export default Main;