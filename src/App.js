import React from 'react';
import Aloha from './components/Aloha';

 function App (props) { // Parent component (батьківська компонента)

  const user = {
    firstName: 'John',
    lastName: 'Doe',
     age: 18
  }

//      const componentAloha = React.createElement(Aloha, {name: 'Rick', age: 50} );
      // props must be an object!

      return (<section>
        <Aloha name={user.firstName} age={50}/>
        <Aloha name="Rick" />
        <Aloha name="Jane" />
        </section>)

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