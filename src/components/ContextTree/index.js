import React from 'react';
import Parent from './Parent';

class ContextTree extends React.PureComponent {

    render(){
    console.log('ContextTree re-render')
    return (
        <div style={{border: '3px solid black', padding: '25px'}}>
            ContextTree
          <Parent />  
        </div>
    );
    }
}

export default ContextTree;

/*
props-drilling (анти-паттерн) - поганий хід
Прокидування пропсів там, де воно не має сенсу

*/