import React from 'react';
import ContextObj from '../../../../../../context';

const InnerChild = (props) => {
    console.log('InnerChild re-render')
    return (
        <ContextObj.Consumer>
            {([user, logOut]) => {
                console.log('внутрішня функція-дитина, яка керує рендером компоненти')
                return (
                    <div style={{ border: '3px solid black', padding: '25px' }}>
                        InnerChild
                        <p>
                         {user?.firstName} {user.user?.lastName}
                        </p>
                        <button onClick={logOut}>LogOut</button>
                    </div>
                )
            }}
        </ContextObj.Consumer>
    );
}

export default InnerChild;
