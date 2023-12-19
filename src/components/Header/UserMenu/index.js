import React from 'react';
import UserContext from '../../../contexts/UserContext';
import ThemeContext from '../../../contexts/ThemeContext';

const UserMenu = () => {
    return (
       <ThemeContext.Consumer>
        {([theme, setTheme]) => {
            return (
                <UserContext.Consumer>
                {([user, logOut]) => {
                    console.log(user);
                    return (
                        <div style={{width: '200px', border: '2px solid blue'}}>
                        <p>{user.firstName} {user.lastName}</p>
                        <p>Theme: {theme}</p>
                        </div>)
                }}
                </UserContext.Consumer> 
            )
        }}
       </ThemeContext.Consumer>       
    );
}

export default UserMenu;
