import React from 'react';
import './Col.css';

const Col = (props) => {
    const {children, colNum} = props;
    return (
        <div className={`col col-${colNum}`}>
            {children}
        </div>
    );
}

export default Col;
