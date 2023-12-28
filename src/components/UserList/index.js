import React, { useState, useEffect } from 'react';
import UserCard from '../UserCard';
import {getUser} from '../../api/getUser';
import Spinner from '../Spinner';

function UserList (props) {
        const [users, setUsers] = useState([]);
        const [isFetching, setFetching] = useState(true);
        const [error, setError] = useState(null);
        const [page, setPage] = useState(1);

        useEffect(load, [page]);

         //  temporary dead zone (тимчасова мертва зона) - ділянка коду, на якій змінна ще не визначена
         // стосується const, let
      
        function load () {
            getUser(page)
            .then(({results}) => {
                setUsers(results)
            })
            .catch(error => {
                setError(error)
            })
            .finally(()=>{
                setFetching(false)
            })
        }
        


   const prevBtnHandler = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }

   const nextBtnHandler = () => {
        setPage(page + 1)
    }
    
        const layout = users.map(u => <UserCard user={u} key={u.login.uuid} />);
        const errorMessage = <p>Ooops, something goes wrong</p>;
        return (
            <section style={{display: 'flex', flexWrap: 'wrap'}}>
                <button onClick={prevBtnHandler}>Prev page</button>
                <button onClick={nextBtnHandler}>Next page</button>
                {isFetching && <Spinner /> }
                {error && errorMessage}
                {layout}
            </section>
        );
    }

export default UserList;


/*
Таска: переписати юзерЛіст на хуки


*/