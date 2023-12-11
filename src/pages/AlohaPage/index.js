import React, { Component } from 'react';
import Aloha from '../../components/Aloha';

class AlohaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ['John', 'Rick', 'Jane', 'Nick', 'Sasha', 'Dasha']
        }
    }

    mapUsers = () => this.state.users.map(user => <Aloha name={user} />)

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
