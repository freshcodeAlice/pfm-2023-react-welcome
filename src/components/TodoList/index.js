import React from 'react';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.css';

const TodoList = (props) => {
    return (
        <section>
            <h1>{props.heading}</h1>
            <ul className={styles['list-wrapper']}>
                {props.children}
            </ul>
        </section>
    );
}

export default TodoList;

// propType