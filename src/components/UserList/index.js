import React, { Component } from 'react';
import UserCard from '../UserCard';
import {getUser} from '../../api/getUser';
import Spinner from '../Spinner';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isFetching: true,
            error: null
        }
    }

    componentDidMount() {

       getUser()
        .then(({results}) => {
           this.setState({
            users: results,
           })
        })
        .catch(error => {
            this.setState({
                error: error,
            })
        })
        .finally(()=>{
           this.setState({
            isFetching: false
           })
        })
    }


    componentDidUpdate() {
        // this.setState({  --- неконтроване оновлення стану призведе до безкінечного пере-рендеру
        //     users: []
        // })
    }
    
    render() {
        const layout = this.state.users.map(u => <UserCard user={u} key={u.login.uuid} />);
        const errorMessage = <p>Ooops, something goes wrong</p>;
        return (
            <section style={{display: 'flex', flexWrap: 'wrap'}}>
                {this.state.isFetching && <Spinner /> }
                {this.state.error && errorMessage}
                {layout}
            </section>
        );
    }
}

export default UserList;
