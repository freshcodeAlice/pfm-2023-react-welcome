import React from 'react';
import './style.css';

function Aloha (props) { //Child component (дочірня компонента)
    // props is an object, read only

    const name = props.name;
    // МИ НЕ МОЖЕМО МІНЯТИ ПРОПСИ
    // ПРОПСИ ІММУТАБЕЛЬНІ

   //  props.name = "Jack";  -- Error! Компонента не може змінювати пропси

    return <h2 className="red-big-text">Hello, {name}</h2>
}

export default Aloha;

/*
props - це вхідні дані
Властивості компоненти

При надсиланні нових пропсів компонента функціональна перевикликається, повертає новий реакт-елемент і реакт порівнює віртуальне дерево та реальне - чи змінилося щось в об'єктах і чи потребуємо ми перестворити нативний елемент

*/