import React, { Component } from 'react';

class BOM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    listener =  ({currentTarget}) => {
        this.setState({
            x: currentTarget.scrollX,
            y: currentTarget.scrollY
        })

    }

    componentDidMount() {
        window.addEventListener('scroll', this.listener)
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listener)
    }
    
    render() {
        const {x, y} = this.state;
        return (
            <div style={{position: 'fixed'}}>
                <p>x:{x}</p>
                <p>y:{y}</p>
            </div>
        );
    }
}



export default BOM;

/*
Створити компоненту, яка відображає поточні ширину і висоту вьюпорта і змінює ці дані, якщо ресайзити вікно

*/