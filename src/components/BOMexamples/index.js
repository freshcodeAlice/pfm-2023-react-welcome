import React, { Component } from 'react';

class BOM extends Component {
   render() {
    return (
        <div>
            <button onClick={() => {
                window.navigator.geolocation.getCurrentPosition((position) => {
                    console.log(position) // Без дозволу користувача нічого не вийде!
                })
            }}>Pick me up </button>
        </div>
    )
   }
}



export default BOM;

/*
Створити компоненту, яка відображає поточні ширину і висоту вьюпорта і змінює ці дані, якщо ресайзити вікно

*/