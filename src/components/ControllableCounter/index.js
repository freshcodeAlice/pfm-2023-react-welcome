import React, { Component } from 'react';

class ControllableCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState((state, props) => {
            const newState = {
                count: state.count + 1
            };

            return newState
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default ControllableCounter;
