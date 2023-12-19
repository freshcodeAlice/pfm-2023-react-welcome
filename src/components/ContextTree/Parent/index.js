import React from 'react';
import SubParent from './SubParent';

const Parent = (props) => {
    console.log('Parent re-render')
    return (
        <div style={{border: 'inherit', padding: '25px'}}>
            Parent
            <SubParent />
        </div>
    );
}

export default Parent;
