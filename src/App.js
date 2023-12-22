import React from 'react';
import ContextTree from './components/ContextTree';
import Header from './components/Header';
import UserContext from './contexts/UserContext';
import ThemeContext from './contexts/ThemeContext';
import CONSTANTS from './constants';
import SignForm from './pages/SignForm';
import ExpandedSignUpForm from './components/ExpandedSignUpForm';
const {THEMES} = CONSTANTS;

class App extends React.Component { // Parent component (батьківська компонента)
    constructor(props) {
      super(props);
      this.state = {
          user: {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            imageSrc: 'https://info.renome.ua/wp-content/uploads/2022/07/placeholder.png'
          },
          theme: THEMES.LIGHT
      }
    }

    logOut = () => {
      this.setState({
        user: {}
      })
    }

    changeTheme = () => {
      this.setState({
        theme: this.state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
      })
    }
  
      render() {
        // console.log(ContextObj.Provider, ContextObj.Consumer)
        return ( 
          <ThemeContext.Provider value={[this.state.theme, this.changeTheme]}>
            <UserContext.Provider value={[this.state.user, this.logOut]}>
              <Header />
              <ExpandedSignUpForm />
              {/* створити поряд компоненту Header, яка рендерить компоненту UserMenu, що теж потребує інфи юзера  */}
            </UserContext.Provider>
          </ThemeContext.Provider>
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