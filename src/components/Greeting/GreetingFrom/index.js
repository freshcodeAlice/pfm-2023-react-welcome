import React, { Component } from 'react';

class GreetingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        // ось тут у нас вже є вся інфа, лежить в стейті
        // тим часом в пропсах лежить коллбек, який ми можемо викликати, щоби передати йому інфу
        this.props.callback(this.state.username);
    }
    
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" 
                name="username"
                value={this.state.username}
                onChange={this.changeHandler}
                />
                <button>Send</button>
            </form>
        );
    }
}

export default GreetingForm;
