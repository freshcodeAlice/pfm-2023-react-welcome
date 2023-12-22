import React, { Component } from 'react';

class BOM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                age: 20
            }
        }
    }
    
   render() {
    return (
        <div>
            <p>Super cool text wich I want to write to clipboard</p>
            <button onClick={() => {
               window.localStorage.setItem('user', JSON.stringify(this.state.user));
            }}>Save my userdata</button>

        <button onClick={() => {
            const data = window.localStorage.getItem('user');
            console.log(JSON.parse(data))
            }}>console user data</button>
        </div>
    )
   }
}



export default BOM;

/*
Зробити кнопку, яка записує до localStorage об'єкт користувача.
За натиснення на другу кнопку виводить цей об'єкт з localStorage на консоль

*/