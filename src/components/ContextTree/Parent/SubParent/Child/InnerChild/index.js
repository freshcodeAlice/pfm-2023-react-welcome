import React from 'react';
import withUser from '../../../../../../HOC/withUser';
import withTheme from '../../../../../../HOC/withTheme';

const InnerChild = (props) => {
    console.log('InnerChild re-render')
    return (
        <div style={{ border: 'inherit', padding: '25px' }}>
            InnerChild
                <p>
                    {props.user?.firstName} {props.user?.lastName}
                </p>
            <button onClick={props.logOut}>LogOut</button>
            <button onClick={props.changeTheme}>ChangeTheme</button>
            </div>
    )
}

export default withTheme(withUser(InnerChild));
