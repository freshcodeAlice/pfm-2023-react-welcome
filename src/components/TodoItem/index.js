import React from 'react';
    
    function TodoItem (props) {

        const {checkboxHandler, deleteHandler, todo: {body, done, id}} = props;

        const doneHandler = ({target: {checked}}) => {
            checkboxHandler(checked, id);
        }

    return (
        <li>    
            <input type="checkbox" checked={done} onChange={doneHandler}/>
            {body}
            <button onClick={() => {deleteHandler(id)}}>X</button>
        </li>
    );
    }

export default TodoItem;
