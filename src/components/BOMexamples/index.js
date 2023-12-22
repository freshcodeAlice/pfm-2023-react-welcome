import React, { Component } from 'react';

class BOM extends Component {
   render() {
    return (
        <div>
            <p>Super cool text wich I want to write to clipboard</p>
            <button onClick={() => {
               window.navigator.clipboard.readText().then((data) => {
                console.log(data);
               });
            }}>Read my clipboard</button>

        <button onClick={() => {
               window.navigator.clipboard.writeText('Super cool text wich I want to write to clipboard').then(() => {
                console.log('successfully copied!');
               });
            }}>Write to my clipboard</button>
        </div>
    )
   }
}



export default BOM;

/*
Створити компоненту, яка відображає поточні ширину і висоту вьюпорта і змінює ці дані, якщо ресайзити вікно

*/