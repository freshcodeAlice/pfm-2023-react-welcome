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
            error: null,
            page: 1
        }
    }

    componentDidMount() {
        this.load();
    }

    load = () => {
        getUser(this.state.page)
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

    componentDidUpdate(prevProps, prevState) {
        // this.setState({  --- неконтроване оновлення стану призведе до безкінечного пере-рендеру
        //     users: []
        // })

        // потрібна умова!
        // умова - сторінка змінилась!
        if(prevState.page !== this.state.page) {
            this.load();
        }

    }


    prevBtnHandler = () => {
        if(this.state.page > 1) {
            this.setState({
                page: this.state.page-1
            })
        }
    }

    nextBtnHandler = () => {
        this.setState({
            page: this.state.page+1
        })
    }
    
    render() {
        const layout = this.state.users.map(u => <UserCard user={u} key={u.login.uuid} />);
        const errorMessage = <p>Ooops, something goes wrong</p>;
        return (
            <section style={{display: 'flex', flexWrap: 'wrap'}}>
                <button onClick={this.prevBtnHandler}>Prev page</button>
                <button onClick={this.nextBtnHandler}>Next page</button>
                {this.state.isFetching && <Spinner /> }
                {this.state.error && errorMessage}
                {layout}
            </section>
        );
    }
}

export default UserList;
