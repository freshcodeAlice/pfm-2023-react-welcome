import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userpass: ''
        }
    }
    

    clickHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
   
    // changeHandler = (event) => {
    //     this.setState({
    //         nameInput: event.target.value
    //     })
    // }

    // passInput = (event) => {
    //     this.setState({
    //         passInput: event.target.value
    //     })
    // }


    generalChangeHandler = ({target: {name, value}}) => {
 
        // const name = event.target.name;
        // const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
   
    render() {
        return (
            <form onSubmit={this.clickHandler}>
                <h2>Type your name, please</h2>
                <input type="text" 
                    value={this.state.username} 
                    onChange={this.generalChangeHandler} 
                    placeholder="Name"
                    name="username"/>  
                <input type="password" 
                    value={this.state.userpass} 
                    onChange={this.generalChangeHandler} 
                    placeholder="Pass"
                    name="userpass"/>
                <button>Send</button>
            </form>
        );
    }
}

export default UserForm;

/*
input в нормі має свій власний стан (і є некерованим компонентом)

Для того, щоби керувати даними, спростити валідацію і подальшу обробку даних форми після відправки
маємо зробити елементи форми контрольованими компонентами

React має перехопити на себе керування цими елементами

Принцип керованого компонента складається з 2 частин:

1. Елемент форми більше не має власного value. Він має його отримувати зі стану компоненти

2. При зміні інпута має ставатися зміна стану компоненти

Для зменшення кількості коду можемо робити один загальний обробник подій onChange на інпутах.
Для цього інпути мають name, який співпадає з ключем стейту

*/