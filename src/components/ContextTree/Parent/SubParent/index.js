import React from 'react';
import Child from './Child';

const SubParent = (props) => {
    console.log('SubParent re-render')
    return (
        <div style={{border: 'inherit', padding: '25px'}}>
            SubParent
            <Child />
        </div>
    );
}

export default SubParent;
