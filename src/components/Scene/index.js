import React, { Component } from 'react';
import Lamp from './Lamp';
import './style.css';

class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light: true
        }
    }

    parentCallback = (infoFromChild) => {
//        console.log(infoFromChild);
        this.setState({
            light: !this.state.light
        })
    }

    render() {
        const {light} = this.state;
        const text = light ? 'Scene is light' : 'Scene is off';
        const cnames = light ? 'light' : 'off';
        return (
            <div className={cnames}>
                <p>{text}</p> 
                <Lamp lightState={light} 
                callback={this.parentCallback}/>  
            </div>
        );
    }
}

export default Scene;




/*

Parent -> Child: props
(батьківська "спускає" дочірній компоненті дані через пропси)

Child -> Parent

*/