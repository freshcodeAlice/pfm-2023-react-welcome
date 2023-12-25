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
import Octopus from './components/Octopus';
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
                <Route exact path='/' component={Octopus} />
                <Route exact path="/home" component={SignForm} />
                <Route exact path="/bom">
                  <BOM />
                </Route>
                <Route exact path="/data" component={DataLoader} />
                <Route exact path="/tree" component={Tree} />
                <Route path="/*" component={NotFound} />
              </Switch>
              <Link to='/bom'>Link to bom-component</Link>
              <Link to='/home'>Link home</Link>
            </BrowserRouter>
        )
      }
}


export default App;


const NotFound = () => {
  return (
    <p>404 - Page not found</p>
  )
}


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



Версія @5.0.0
Роутер - BrowserRouter
Роут-метчерс (стрілки для перемикання) - Switch
Роути (шляхи-поїзди) - Route

посилання(лінки) - Link

<Route path='шлях' component={Посилання на компонент без <>} />
або
<Route path=''>
  <Компонента>
</Route

 

Версія @6...

Роутер - BrowserRouter
Роут-метчерс (стрілки для перемикання) - Routes
Роути (шляхи-поїзди) - Route

лінки - NavLink


  <Route
      element={<Котмпонента />}
      path="шлях"
      лоадери і всяке>
*/