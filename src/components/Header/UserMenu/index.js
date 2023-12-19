import React from 'react';
import UserContext from '../../../contexts/UserContext';

const UserMenu = () => {
    return (
       
           <UserContext.Consumer>
            {([user, logOut]) => {
                console.log(user);
                return (
                    <div style={{width: '200px', border: '2px solid blue'}}>
                    <p>{user.firstName} {user.lastName}</p>
                    </div>)
            }}
            </UserContext.Consumer> 
       
    );
}

export default UserMenu;
