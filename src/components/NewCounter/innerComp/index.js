import React from 'react';

const InnerCompo = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.callbackFromParent(5)
            }}>Set parent counter to 5!!</button>
        </div>
    );
}

export default InnerCompo;
