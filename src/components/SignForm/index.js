import React, { useReducer} from 'react';


/*
Редьюсер - просто javascript-функція
Отримує в якості аргументів
    - поточний стан
    - js-об'єкт action, який несе інформацію про необхнідні зміни стейту
Внаслідок роботи повертає новий об'єкт стану

Редьюсер - це ЧИСТА ФУНКЦІЯ
1. Детермінована
(за одних і тих самих вхідних даних - один і той самий результат)
Наслідок цього правила: редьюсер ніколи не мутує свої аргументи (не мутує стан!).
Повертатись має новий об'єкт стану

2. Без побічних ефектів
На етапі редьюсера вся робота синхронна, ніяких запитів на сервер не робимо, ніяких обробників подій не навішує

*/

function reducer(state, action) {
    switch(action.type) {
        case 'firstName': 
        case 'lastName': 
        case 'email':
        case 'password':
        case 'birthday':
        case 'gender': {
           return {
                ...state,
                [action.type]: action.value
            }
            break
        }
        case 'another action type': {
            // іншим чином змінюємо стейт
        }
        default: {
            return state
        }
    }

    // return {
    //     ...state,
    //     [action.type]: action.value
    // }

}



const SignForm = () => {
    const [state, dispatch] = useReducer(reducer, {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            birthday: '',
            gender: ''
    });
    /*
    При виклику хука передаємо йому функцію-редьюсер, (необов'язково - початковий об'єкт стейту)
    Отримуємо масив з двома елементами:
    - state - загальний стан
    - dispatch - функція, яка приймає об'єкт action і несе його в редьюсер

    */


    const inputChangeHandler = ({target: {name, value}}) => {
        const action = {
            type: name,
            value
        }
        dispatch(action)
    }



    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');   
    // const [password, setPassword] = useState('');     
    // const [birthday, setBirthday] = useState('');  
    // const [gender, setGender] = useState('');     

    // const changeHandler = ({target: {name, value}}) => {
    //     switch(name) {
    //         case 'firstName': {
    //             //// валідація
    //             setFirstName(value);
    //             break
    //         }
    //         case 'lastName': {
    //             //// валідація
    //             setLastName(value);
    //             break
    //         }
    //         case 'email': {
    //             //// валідація
    //             setEmail(value);
    //             break
    //         }
    //         case 'password': {
    //             //// валідація
    //             setPassword(value);
    //             break
    //         }
    //         case 'birthday': {
    //             setBirthday(value);
    //             break
    //         }
    //         case 'gender': {
    //             setGender(value);
    //             break
    //         }
    //     }
    // }

    // const firstNameHandler = ({target: {value}}) => {
    //     setFirstName(value)
    // }

    const {firstName, lastName, email, password, birthday, gender} = state;
    return (
        <form>
            <input name="firstName" placeholder='firstName' value={firstName} onChange={inputChangeHandler}/>
            <input name="lastName"  placeholder='lastName' value={lastName} onChange={inputChangeHandler}/>
            <input name="email"  placeholder='email' value={email} onChange={inputChangeHandler}/>
            <input name="password"  placeholder='password' value={password} onChange={inputChangeHandler}/>
            <input name="birthday" type="date" value={birthday} onChange={inputChangeHandler}/>
            <select value={gender} onChange={inputChangeHandler} name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Nonbinary">Nonbinary</option>
            </select>
        </form>
    );
}

export default SignForm;
