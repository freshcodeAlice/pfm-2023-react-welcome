import React from 'react';

const CounterBtns = (props) => {
    return (
        <div>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    );
}

export default CounterBtns;
