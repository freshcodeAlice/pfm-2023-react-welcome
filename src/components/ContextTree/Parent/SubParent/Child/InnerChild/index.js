import React from 'react';
import UserContext from '../../../../../../contexts/UserContext';

const InnerChild = (props) => {
    console.log('InnerChild re-render')
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
                    </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default InnerChild;
