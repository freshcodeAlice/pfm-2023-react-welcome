import React, { Component } from 'react';

class BOM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }

    listener =  ({target: {innerWidth, innerHeight}}) => {
        this.setState({
            width: innerWidth,
            height: innerHeight
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.listener)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.listener)
    }
    
    render() {
        const {width, height} = this.state;
        return (
            <div>
                <p>width:{width}</p>
                <p>height:{height}</p>
            </div>
        );
    }
}



export default BOM;

/*
Створити компоненту, яка відображає поточні ширину і висоту вьюпорта і змінює ці дані, якщо ресайзити вікно

*/