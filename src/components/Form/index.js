import React, { Component } from 'react';
import * as yup from 'yup';


const SCHEMA = yup.object({
    firstName: yup.string('FirstName must be a string').min(1, 'FirstName must have at least 1 symbol').max(30),
    lastName: yup.string().min(1).max(30),
    email: yup.string().email().required(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Password must have big letters, small letters and at least 1 special symbol')
})

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            error: null
        }
    }

    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        try {
            console.log(SCHEMA.validateSync(this.state))
        } catch (error) {
            this.setState({
                error
            })
        }

    }
    
    render() {
        const {firstName, lastName, email, password} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type='text' 
                    name='firstName'
                    placeholder='Type your name'
                    value={firstName}
                    onChange={this.changeHandler}/>
                <input 
                    type='text'
                    name='lastName'
                    placeholder='Type your last name'
                    value={lastName}
                    onChange={this.changeHandler}/>
                <input 
                    type='text'
                    name='email'
                    placeholder='Type your email'
                    value={email}
                    onChange={this.changeHandler}/>
                <input 
                    type='text'
                    name='password'
                    placeholder='Type your password'
                    value={password}
                    onChange={this.changeHandler}/>
                <button>Submit</button>
                {this.state.error && <p>{this.state.error.message}</p>}
            </form>
        );
    }
}

export default SignUpForm;
