import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.round(Math.random())
        }
    }

    changeProp = () => {
        this.setState({
            num: Math.round(Math.random())
        })
    }
    
    render() {
        return (
            <div>
                <Child num={this.state.num} />
                <button onClick={this.changeProp}>Change child prop</button>
            </div>
        );
    }
}

export default Parent;
