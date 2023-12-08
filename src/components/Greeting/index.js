import React, { Component } from 'react';
import GreetingFrom from './GreetingFrom';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
    }


    changeCallback = (username) => {
        this.setState({
            username
        })
    }
    
    render() {
        return (
            <div>
                <h1>Hello, {this.state.username ? this.state.username : 'anonym'}</h1>
                <GreetingFrom callback={this.changeCallback}/>
            </div>
        );
    }
}

export default Greeting;




/// Створити дві компоненти - одна батьківська, яка вітається з користувачем - Привіт, введіть ім'я
//      Друга - дочірня, яка має форму вводу і кнопку. В інпут має бути введене ім'я. За натиснення на кнопку батьківська компонента має вивести - Раді бачити, юзернейм 