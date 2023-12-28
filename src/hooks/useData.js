import React, { useState, useEffect } from 'react';

function useData (fetchCallback) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setFetching] = useState(true);

    useEffect(() => {
        fetchCallback()
        .then(data => {
            setData(data)
        })
        .then(error => {
            setError(error)
        })
        .finally(() =>{
            setFetching(false)
        })
    }, [])
   
    return {data, error, isFetching}
}

export default useData;


/*
Три техніки, які дозволяють компонентам ділитись логікою
1. Рендер-проп (передавати компоненті в якості дочірньої функції, як вона має рендерити результат своєї роботи)
2. HOC (High Order Component) - це функція, яка приймає компонент і повертає цей компонент, що в пропсах міститиме результат певної роботи
3. Хуки (кастомні хуки)

Хук - це Javascript-функція, ім'я якої починається з "use", і яка використовує інші хукі

*/