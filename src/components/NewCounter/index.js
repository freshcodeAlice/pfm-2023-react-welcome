import React, {useState} from 'react';
import InnerCompo from './innerComp';

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
        setCount((prevState) => prevState - 1)
    }

    console.log('батьківська оновилась!')

    return (
        <div>
           <h2>{count}</h2> 
           <button onClick={increment}>+</button>
           <button onClick={decrement}>-</button>
           <InnerCompo callbackFromParent={setCount}/>
        </div>
    );
}

export default NewCounter;
