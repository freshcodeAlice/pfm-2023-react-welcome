import React from 'react';
import ContextTree from './components/ContextTree';
import Header from './components/Header';
import ContextObj from './context';

class App extends React.Component { // Parent component (батьківська компонента)
    constructor(props) {
      super(props);
      this.state = {
          user: {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            imageSrc: 'https://info.renome.ua/wp-content/uploads/2022/07/placeholder.png'
          }
      }
    }

    logOut = () => {
      this.setState({
        user: {}
      })
    }
  
      render() {
        // console.log(ContextObj.Provider, ContextObj.Consumer)
        return ( 
          <ContextObj.Provider value={[this.state.user, this.logOut]}>
            <Header />
            <ContextTree />
            {/* створити поряд компоненту Header, яка рендерить компоненту UserMenu, що теж потребує інфи юзера  */}
          </ContextObj.Provider>
        )
      }
}


export default App;

/*
Контекст

Контекст - це інтерфейс, який надає сховище для інформації та методи для підключення компоненти до цього сховища

робота з контекстом складається з 3 кроків:

+1. Створення контексту.
Викликаємо функцію React.createContext() і отримуємо об'єкт контексту

+2. Роздача контексту нижче по дереву компонент

+3. Підключення до контексту безпосередньо тої компоненти, якій він потрібен

*/