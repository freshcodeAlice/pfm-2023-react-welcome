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
    
    render() {
        return (
            <section>
                {this.mapUsers()}
            </section>
        );
    }
}

export default AlohaPage;
