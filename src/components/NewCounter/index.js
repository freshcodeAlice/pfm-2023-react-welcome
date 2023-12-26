import React, {useState} from 'react';

const NewCounter = () => { // функціональна компонента - хук використовувати можна
    // ось це - найвищий рівень
    const [state, setState] = useState({
        count: 0,
        step: ''
    });
    // const [step, setStep] = useState('');
// На відміну від класового стану, тут state - не об'єкт, а той тип даних, який ви туди поклали

    const newIncrement = () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }

    const changeStepHadnler = ({target: {value}}) => {
        setState({
            ...state,
            step: value 
        })
    }

    // const increment = () => {
    //     setCount(count+1)
    // }

    // const decrement = () => {
    //     setCount((prevState) => prevState - 1)
    // }

    // const changeHandler = ({target: {value}}) => {
    //     setStep(value)
    // }

    return (
        <div>
           <h2>{state.count}</h2> 
           <input type="number" name="step" value={state.step} onChange={changeStepHadnler}/>
           <button onClick={newIncrement}>+</button>
           {/* <button onClick={decrement}>-</button> */}
        </div>
    );
}

export default NewCounter;



/*
this.setState (функція для зміни стану класової компоненти)

{новий стан} -> {...state, ...новий стан}

 this.setState({
        user: {}
      })  -> {...this.state, ...новий юзер}


setState (хук)
{новий стан} -> {новий стан}

*/