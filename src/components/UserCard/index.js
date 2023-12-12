import React from 'react';

const UserCard = (props) => {
    const {name: {first, last}} = props.user;
    return (
        <div>
            <p>{first} {last}</p>
        </div>
    );
}

export default UserCard;
