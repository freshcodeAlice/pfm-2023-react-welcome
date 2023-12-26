import React, {useState} from 'react';

const NewCounter = () => { // функціональна компонента - хук використовувати можна
    // ось це - найвищий рівень
    const [count, setCount] = useState(0);
// На відміну від класового стану, тут state - не об'єкт, а той тип даних, який ви туди поклали

    /*
    if() {
        // ось це вже не найвищий рівень
    } else{

    }

    for() {
        //це теж не найвищий рівень
    }
    */


    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }


    return (
        <div>
           <h2>{count}</h2> 
           <button onClick={increment}>+</button>
           <button onClick={decrement}>-</button>
        </div>
    );
}

export default NewCounter;
