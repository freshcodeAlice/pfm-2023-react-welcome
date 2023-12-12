import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            done: false
        }
    }

    changeHandler = ({target: {name, value}}) => {
            this.setState({
                [name]: value
            })
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
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.changeHandler}
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
