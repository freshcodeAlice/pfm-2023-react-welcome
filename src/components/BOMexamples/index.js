import React from 'react';

const BOM = () => {
    return (
        <div>
            <button onClick={() => {
                window.close()
            }}>Close window</button>
                        <button onClick={() => {
                window.open('https://google.com')
            }}>Open window</button>
        </div>
    );
}

export default BOM;

/*
Створити компоненту, яка відображає поточні ширину і висоту вьюпорта і змінює ці дані, якщо ресайзити вікно

*/