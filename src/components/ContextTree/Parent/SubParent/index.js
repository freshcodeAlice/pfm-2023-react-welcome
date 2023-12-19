import React from 'react';
import Child from './Child';

const SubParent = (props) => {
    console.log('SubParent re-render')
    return (
        <div style={{border: '3px solid black', padding: '25px'}}>
            SubParent
            <Child />
        </div>
    );
}

export default SubParent;
