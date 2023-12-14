import React, { Component } from 'react';
import UserCard from '../UserCard';
import {getUser} from '../../api/getUser';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
       getUser()
        .then(({results}) => {
           this.setState({
            users: results
           })
        })
    }


    componentDidUpdate() {
        // this.setState({  --- неконтроване оновлення стану призведе до безкінечного пере-рендеру
        //     users: []
        // })
    }
    
    render() {
        const layout = this.state.users.map(u => <UserCard user={u} key={u.login.uuid} />)
        return (
            <section style={{display: 'flex', flexWrap: 'wrap'}}>
                {layout}
            </section>
        );
    }
}

export default UserList;
