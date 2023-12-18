import React, { Component } from 'react';
import ControllableCounter from '../../components/ControllableCounter';

class CounterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        }
    }
    
    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: Number(value)
        })
    }

    render() {
        console.log('parent re-render')
        return (
            <div>
                <input 
                type="range" 
                value={this.state.step}
                name='step'
                onChange={this.changeHandler}/>
                <span>{this.state.step}</span>
                <ControllableCounter step={this.state.step}/>
            </div>
        );
    }
}

export default CounterPage;
