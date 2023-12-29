import React, {useState} from 'react';

const SignForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');   
    const [password, setPassword] = useState('');     
    const [birthday, setBirthday] = useState('');  
    const [gender, setGender] = useState('');     

    const changeHandler = ({target: {name, value}}) => {
        switch(name) {
            case 'firstName': {
                setFirstName(value);
                break
            }
            case 'lastName': {
                setLastName(value);
                break
            }
            case 'email': {
                setEmail(value);
                break
            }
            case 'password': {
                setPassword(value);
                break
            }
            case 'birthday': {
                setBirthday(value);
                break
            }
            case 'gender': {
                setGender(value);
                break
            }
        }
    }

    // const firstNameHandler = ({target: {value}}) => {
    //     setFirstName(value)
    // }


    return (
        <form>
            <input name="firstName" placeholder='firstName' value={firstName} onChange={changeHandler}/>
            <input name="lastName"  placeholder='lastName' value={lastName} onChange={changeHandler}/>
            <input name="email"  placeholder='email' value={email} onChange={changeHandler}/>
            <input name="password"  placeholder='password' value={password} onChange={changeHandler}/>
            <input name="birthday" type="date" value={birthday} onChange={changeHandler}/>
            <select value={gender} onChange={changeHandler} name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Nonbinary">Nonbinary</option>
            </select>
        </form>
    );
}

export default SignForm;
