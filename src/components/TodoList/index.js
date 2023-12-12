import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = (props) => {
    return (
        <ul>
            {props.list.map(todo => <TodoItem   
                                        todo={todo} 
                                        key={todo.id} 
                                        checkboxHandler={props.checkboxHandler}
                                        deleteHandler={props.deleteHandler}/>)}
        </ul>
    );
}

export default TodoList;
