import React, {useContext} from 'react';
import UserContext from '../../../contexts/UserContext';
import ThemeContext from '../../../contexts/ThemeContext';

const UserMenu = (props) => {
    const [theme, changeTheme] = useContext(ThemeContext);
    const [user, setUser] = useContext(UserContext);

    return (
            <div style={{width: '200px', border: '2px solid blue'}}>
            <p>{user.firstName} {user.lastName}</p>
            <p>theme: {theme}</p>
            </div>
    )
}


export default UserMenu
