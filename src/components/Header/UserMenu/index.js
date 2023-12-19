import React from 'react';
import ContextObj from '../../../context';

const UserMenu = () => {
    return (
       
           <ContextObj.Consumer>
            {([user, logOut]) => {
                console.log(user);
                return (
                    <div style={{width: '200px', border: '2px solid blue'}}>
                    <p>{user.firstName} {user.lastName}</p>
                    </div>)
            }}
            </ContextObj.Consumer> 
       
    );
}

export default UserMenu;
