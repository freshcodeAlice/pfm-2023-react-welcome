import React from 'react';

const SceneText = (props) => {
    const text = props.lightValue ? 'Scene is light' : 'Scene is off';
    return (
        <p>{text}</p> 
    );
}

export default SceneText;
