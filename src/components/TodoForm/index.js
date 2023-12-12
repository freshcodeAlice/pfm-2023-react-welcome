import React, { Component } from 'react';
import styles from './TodoForm.module.css';
import 'animate.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            done: false,
            isInputValid: null
        }
    }

    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
        if(value.includes('*')){
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState({
                isInputValid: true
            })
        }
           
    }

    checkboxHandler = ({target: {name, checked}}) => {
        this.setState({
            done: checked
        })
    }


    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.todo) {
            this.props.getCallback(this.state);
            this.setState({
                todo: ''
            })
        }
    }
    
    render() {
        // const cnames = `animate__animated animate__bounce ${styles.container}`
        //className={cnames}


        const cnames = cx({
            [styles.input]: true,
            [styles.valid]: this.state.isInputValid,
            [styles.invalid]: !this.state.isInputValid
        })
        //styles.input + ' ' + this.state.isInputValid ? styles.valid : styles.invalid



        return (
            <form onSubmit={this.submitHandler} >
                <input 
                    type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.changeHandler}
                    className={cnames}
                    /> 
                    <label>Is it done?
                        <input type="checkbox"
                        checked={this.state.done}
                        onChange={this.checkboxHandler}
                        />
                    </label>
                    <button>Submit</button>
            </form>
        );
    }
}

export default TodoForm;


/*
Хочемо:
{
   className1: true,
   className2: false,
   className3: true 
}  -> 'className1 className3'
*/


function cx(objectClassNames) {
    /* Крок1:
    {className1: true,
   className2: false,
   className3: true }  -> [[className1, true], [className2, false], [className3, true]]
    */

  const arrayOfTwo = Object.entries(objectClassNames);

  // Крок 2: відфільтрувати все, що в якості значення мало false
  //[[className1, true], [className2, false], [className3, true]] -> [[className1, true], [className3, true]]
  const filtered = arrayOfTwo.filter(([key, condition]) => condition)

  // Крок 3: перетворити цей масив з масивами на масив з тільки назвами класів
 // [[className1, true], [className3, true]] -> [className1, className3]
  const mapped = filtered.map(([key]) => key);

    // Крок 4: перетворити одномірний масив в рядок тексту
    // [className1, className3] -> 'className1 className3'

    const result = mapped.join(' ');


    return result;

    }

const cxVar2 = (objectClassNames) =>  Object
                                        .entries(objectClassNames)
                                        .filter(([key, condition]) => condition)
                                        .map(([key]) => key)
                                        .join(' ')