import React, { Component } from 'react';
import CounterBtns from './CounterBtns';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCallback = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCallback = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <CounterBtns increment={this.incrementCallback} decrement={this.decrementCallback}/>
            </div>
        );
    }
}

export default Counter;



/// Створити лічильник (класова компонента), який має дочірню з двома кнопками - для інкременту та декременту. Значення лічильника - це стан батьківської
// Counter -> state.count: 0
// CounterBtns -> дві кнопки