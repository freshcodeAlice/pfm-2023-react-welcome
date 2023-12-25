import React from 'react';
import ContextTree from './components/ContextTree';
import Header from './components/Header';
import UserContext from './contexts/UserContext';
import ThemeContext from './contexts/ThemeContext';
import CONSTANTS from './constants';
import DataLoader from './components/DataLoader';
import Tree from './components/ContextTree';
import SignForm from './pages/SignForm';
import ExpandedSignUpForm from './components/ExpandedSignUpForm';
import BOM from './components/BOMexamples';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';




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
            <BrowserRouter>
              <Switch>
                <Route path="/home" component={SignForm} />
                <Route path="/bom">
                  <BOM />
                </Route>
                <Route path="/data" component={DataLoader} />
                <Route path="/tree" component={Tree} />
              </Switch>
              <Link to='/bom'>Link to bom-component</Link>
              <Link to='/home'>Link home</Link>
            </BrowserRouter>
        )
      }
}


export default App;


/*
Умовний рендеринг

Умовний рендеринг - коли ми щось рендеримо (або ні) залежно від певної умови

Роутінг в React - умовний рендеринг на основі URL


React-router-dom

Три типа компонентів:
1. Роутери (маршрутизатори) - диспетчер
2. Роут-матчерс (стрілка)
3. Роути (шляхи) - поїзди


навігатори-лінки


*/