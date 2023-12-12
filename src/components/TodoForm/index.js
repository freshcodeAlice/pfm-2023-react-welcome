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


/*        const cnames = styles.input + ' ' + this.state.isInputValid ? styles.valid : styles.invalid


*/
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

