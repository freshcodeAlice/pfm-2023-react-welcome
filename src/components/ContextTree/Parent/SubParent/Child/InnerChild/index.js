import React, {useContext} from 'react';
import ThemeContext from '../../../../../../contexts/ThemeContext';
import UserContext from '../../../../../../contexts/UserContext';

const InnerChild = (props) => {
        const [theme, setTheme] = useContext(ThemeContext);
        const [user, setUser] = useContext(UserContext);
   
        return (
        <div style={{ border: 'inherit', padding: '25px' }}>
            InnerChild
                <p>
                    {user?.firstName} {user?.lastName}
                </p>
            <button onClick={setUser}>LogOut</button>
            <button onClick={setTheme}>ChangeTheme</button>
            </div>
    )
}

export default InnerChild
