import React from 'react';
import InnerChild from './InnerChild';

const Child = (props) => {
    console.log('Child re-render')
    return (
        <div style={{border: '3px solid black', padding: '25px'}}>
            Child
            <InnerChild />
        </div>
    );
}

export default Child;
