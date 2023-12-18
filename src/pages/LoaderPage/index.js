import React, { Component } from 'react';
import UserLoader from '../../components/UserLoader';
import PhoneLoader from '../../components/PhoneLoader';
import Spinner from '../../components/Spinner';

class LoaderPage extends Component {
    render() {
        return (
            <div>
                <UserLoader fetchCallback={() => {
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
                </UserLoader>
                {/* <PhoneLoader /> */}
            </div>
        );
    }
}

export default LoaderPage;
