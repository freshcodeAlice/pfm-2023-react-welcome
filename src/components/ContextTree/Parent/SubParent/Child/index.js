import React from 'react';
import InnerChild from './InnerChild';

const Child = (props) => {
    return (
        <div style={{border: 'inherit', padding: '25px'}}>
            Child
            <InnerChild />
        </div>
    );
}

export default Child;
