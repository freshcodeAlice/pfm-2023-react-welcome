import React from 'react';
import withUser from '../../../HOC/withUser';
import withTheme from '../../../HOC/withTheme';

const UserMenu = (props) => {
    return (
            <div style={{width: '200px', border: '2px solid blue'}}>
            <p>{props.user.firstName} {props.user.lastName}</p>
            <p>theme: {props.theme}</p>
            </div>
    )
}


export default withTheme(withUser(UserMenu));
