import React from 'react';
import withUser from '../../../HOC/withUser';

const UserMenu = (props) => {
    return (
            <div style={{width: '200px', border: '2px solid blue'}}>
            <p>{props.user.firstName} {props.user.lastName}</p>
            </div>
    )
}


export default withUser(UserMenu);
