import React, { Component } from 'react';
import Aloha from '../../components/Aloha';

class AlohaPage extends Component {
    constructor(props) {
        super(props);
        // Automatic way
        // const users =  ['John', 'Rick', 'Jane', 'Nick', 'Sasha', 'Dasha'].map((user, index) => ({name: user, id: index}));
        // this.state = {
        //     users: users
        // };

        this.state = {
            users: [{
                id: 0, 
                name: 'John'
            }, {
                id: 1,
                name: 'Rick'
            }, {
                id: 2,
                name: 'Jane'
            }, {
                id: 3,
                name: 'Nick'
            }, {
                id: 4,
                name: 'Sasha'
            }, {
                id: 5,
                name: 'Dasha'
            }]
        }

    }

    mapUsers = () => this.state.users.map(user => <Aloha name={user.name} key={user.id}/>)
    // key має бути заснований на унікальній ідентифікації, яка виходить з самих даних! і не перестворюється при кожному перерендері (як рандом або індекс масиву)

    sortingUsers = () => {
        // відсортувати масив, який містить дані (на яких заснований  UI)
       // оскільки метод sort сортує на місці, а мутувати стан нам не можна, треба зробити копію масива
       const copy = [...this.state.users];
       copy.sort( (a,b) => a.toLowerCase > b.toLowerCase ? 1 : -1)
        // оновити state, просигналізувавши, що у мене змінився стан
        this.setState({
            users: copy
        })
    }
    
    render() {
        return (
            <section>
                <button onClick={this.sortingUsers}>Sort users</button>
                {this.mapUsers()}
            </section>
        );
    }
}

export default AlohaPage;
