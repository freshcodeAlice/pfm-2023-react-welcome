import React from 'react';

const List = (props) => {
    return (
        <article>
            <h1>{props.heading}</h1>
            <ul>
            {props.children}
            </ul>
        </article>
    );
}

export default List;


/*
React.createElement('ul', {}, [
    React.createElement('li',{},'Item1'),
    React.createElement('li',{},'Item2'),
    React.createElement('li',{},'Item3'),
])

*/