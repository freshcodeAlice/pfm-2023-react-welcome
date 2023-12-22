import React, { Component } from 'react';

class BOM extends Component {
   render() {
    return (
        <div>
         <button onClick={() => {window.location.assign('http://google.com')}}>Assign</button>
         <button onClick={() => {window.location.reload()}}>Reload</button>
         <button onClick={() => {window.location.replace('http://google.com')}}>Replace</button>
        </div>
    )
   }
}



export default BOM;

/*
Створити компоненту, яка відображає поточні ширину і висоту вьюпорта і змінює ці дані, якщо ресайзити вікно

*/