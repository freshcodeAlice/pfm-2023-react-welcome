import React from 'react';



const App = function (props) {

// const button = React.createElement('button, {}, X);
//  const li = React.createElement('li', {}, 'item!', button);
// const ul = React.createElement('ul', {}, li);

// const h1 = <h1>Hello, my dear React.js</h1>
//   return h1

  return (<ul>
            <li>item 
              <button>X</button>
            </li>
          </ul>)

}


export default App;


/*
Компоненти в React - це блок коду (функція, наприклад), який створює і повертає react-елементи

Компоненти бувають двох типів:
- Функціональні - це звичайна JS-функція, яка повертає створений react-елемент
- Класові - це клас, який наслідується від React.Component і описувати шаблон компоненти, яка має бути в інтерфейсі

*/