import React, { Component } from 'react';
 import DataLoader from '../../components/DataLoader';
// import PhoneLoader from '../../components/PhoneLoader';
import Spinner from '../../components/Spinner';

class LoaderPage extends Component {
    render() {
        return (
            <div>
                <DataLoader fetchCallback={() => {
                      return fetch('/users.json')
                      .then(res => res.json())
                }}>
                    {(state) => {
                    return (
                        <ul>
                            {state.isFetching && <Spinner />}
                            {state.data.map(u => <li key={u.id}>{u.name}</li>)}
                        </ul>
                    );
                     }}
                </DataLoader>
                <DataLoader fetchCallback={() => {
                      return fetch('/phones.json')
                      .then(res => res.json())
                }}>
                    {(state) => {
                        return (
                            <ol>
                                {state.data.map(p => <li key={p.id}>{p.brand} - {p.model}</li>)}
                            </ol>
                        );
                    }}
                    </DataLoader>
            </div>
        );
    }
}

export default LoaderPage;


/*
Ділитися логікою в React можна за допомогою трьох технік (паттернів):

1. render-props - компонента приймає ззовні в якості дитини функцію, якій вона передає результат своєї роботи, і викликає її у власному рендері
(по суті ми передаємо компоненті ззовні що вона має рендерити)

2. HOC (High Order Component - Компонента вищого порядку)

3. Користувацькі хуки
*/