import React from 'react';
import UserContext from '../../../../../../contexts/UserContext';
import ThemeContext from '../../../../../../contexts/ThemeContext';

const InnerChild = (props) => {
    console.log('InnerChild re-render')
    return (
        <ThemeContext.Consumer>
            {([theme, changeTheme]) => {
                return (
                <UserContext.Consumer>
                {([user, logOut]) => {
                    console.log('внутрішня функція-дитина, яка керує рендером компоненти')
                    return (
                        <div style={{ border: 'inherit', padding: '25px' }}>
                            InnerChild
                            <p>
                             {user?.firstName} {user?.lastName}
                            </p>
                            <button onClick={logOut}>LogOut</button>
                            <button onClick={changeTheme}>ChangeTheme</button>
                        </div>
                    )}}
                </UserContext.Consumer>
                )}}
        </ThemeContext.Consumer>
    );
}

export default InnerChild;
