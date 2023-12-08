import React from 'react';
import Aloha from './components/Aloha';
import Light from './components/Light';
import Octopus from './components/Octopus';
import Tree from './components/Tree';
import Timer from './components/Timer';
import Scene from './components/Scene';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import './reset.css';

class App extends React.Component { // Parent component (батьківська компонента)
    constructor(props) {
      super(props);
      this.state = {
        render: true
      }
    }

    changeRender = () => {
      this.setState({
        render: !this.state.render
      })
    }

      render() {
        return ( 
          <section>
            {/* <button onClick={this.changeRender}>Change render</button>
            <p>Timer is {this.state.render ? 'render' : 'off render'}</p> */}
           <UserForm />
          </section>

        )
      }


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