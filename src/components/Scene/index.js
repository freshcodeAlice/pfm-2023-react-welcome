import React, { Component } from 'react';
import Lamp from './Lamp';
import SceneText from './SceneText';
import './style.css';

class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light: true
        }
    }

    parentCallback = () => {
        this.setState({
            light: !this.state.light
        })
    }

    render() {
        const {light} = this.state;
        
        const cnames = light ? 'light' : 'off';
        return (
            <div className={cnames}>
                <SceneText lightValue={light}/>
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

Child -> Parent: callback
(дитина може передавати батьку тільки якщо має посилання на коллбек батька (функція відпрацьовує у батьківської компоненти, а викликає її дочірня))

Child -> Child: callback to Parent, props to another Child
(між сіблінгами взаємодія будується комбінацією коллбека та пропсів - одна дитина сигналізує за допомогою коллбека батьку, а батько оновлюється і спускає нові пропси другій дитині )


*/