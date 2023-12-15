import React from 'react';

const Grid = (props) => {
    const {children} = props;
    return (
        <div style={{maxWidth: '1200px'}}>
            {children}
        </div>
    );
}

export default Grid;
