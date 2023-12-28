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
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import NewCounter from './components/NewCounter';
import UserList from './components/UserList';
import PhoneLoader from './components/PhoneLoader';




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
          <UserContext.Provider value={[this.state.user, this.logOut]}>
          <ThemeContext.Provider value={[this.state.theme, this.changeTheme]}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Octopus />} />
                <Route path="/home" element={<SignForm />} />
                <Route path="/bom" element={<BOM />} />
                <Route path="/data" element={<DataLoader />} />
                <Route path="/tree" element={<Tree />} />
                <Route path='/counter' element={<NewCounter />}/>
                <Route path='/userlist' element={<UserList />} />
                <Route path='/phoneloader' element={<PhoneLoader />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
              <ul>
                <li>  <NavLink to='/bom'>Link to bom-component</NavLink></li>
                <li><NavLink to='/tree'>Link tree</NavLink></li>
                <li><NavLink to='/counter'>Link counter</NavLink></li>
                <li><NavLink to='/userlist'>Link to user list</NavLink></li>
                <li><NavLink to='/phoneloader'>Link to phone loader</NavLink></li>
              </ul>
            
             
              
              
            </BrowserRouter>
            </ThemeContext.Provider>
            </UserContext.Provider>
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


// таска - прописати роутер і описати шляхи та пункти меню для всіх компонент, які ми з вами писали раніше
