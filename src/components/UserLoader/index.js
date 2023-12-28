import React from 'react';
import useData from '../../hooks/useData';

const UserLoader = (props) => {
       const {data, error, isFetching} = useData(() => {
            return fetch('/users.json')
            .then(res => res.json())
      })
    return (
        <ul>
            {isFetching && <Spinner />}
            {error && <p>Ooops, something goes wrong</p>}
            {data.map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
    );
}

export default UserLoader;


/*

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
*/