import React from 'react';
import Aloha from './components/Aloha';

 function App (props) { // Parent component (батьківська компонента)

  const user = {
    firstName: 'John',
    lastName: 'Doe',
     age: 18
  }

// const h1 = React.createElement('h1', {}, `Hello, ${user.firstName}`);
// return h1;

/*    return <h1>Hello, {user.firstName}</h1>   // JSX-синтаксис
          <p>lorem ipsum</p>
          */

          // return React.createElement('article', {}, React.createElement('h1', {}, 'Heading'), React.createElement('p', {}, 'lorem ipsum'))
          // return (<article>
          //         <h1>Heading</h1>
          //         <p>lorem ipsum</p>
          //       </article>)


          return <Aloha />

}


export default App;


/*
Компоненти в React - це функція, яка отримує певні вхідні дані і повертає react-елементи

Компоненти бувають двох типів:
- Функціональні - це звичайна JS-функція, яка повертає створений react-елемент
- Класові - це клас, який наслідується від React.Component і описувати шаблон компоненти, яка має бути в інтерфейсі

*/



/*
Рендер - процес відмальовування (отрисовки) елементів на сторінці браузера.
(re-render - перемальовування, оновлення)

Браузер оновлює елементи на екрані (ререндерить сторінку) в той момент, коли стек пустий


*/