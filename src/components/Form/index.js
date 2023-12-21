import React, { Component } from 'react';
import * as yup from 'yup';
import {Form, Formik, Field, ErrorMessage} from 'formik';
import CONSTANTS from '../../constants';


const SCHEMA = yup.object({
    firstName: yup.string('FirstName must be a string').min(1, 'FirstName must have at least 1 symbol').max(30),
    lastName: yup.string().min(1).max(30),
    email: yup.string().email().required(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Password must have big letters, small letters and at least 1 special symbol')
});

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

 function SignUpForm (props){

    

    // changeHandler = ({target: {name, value}}) => {
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // submitHandler = (event) => {
    //     event.preventDefault();
    //     try {
    //         console.log(SCHEMA.validateSync(this.state))
    //     } catch (error) {
    //         this.setState({
    //             error
    //         })
    //     }

    // }
    

        // const {firstName, lastName, email, password} = this.state;
        return (
           <Formik 
           initialValues={initialValues}
           onSubmit={(values, formikBag) => {
            console.log('values: ', values);
            console.log('formikBag', formikBag);
           }} validationSchema={SCHEMA}>
            {(formikProps)=> {
                return ( 
              <Form>
                {/* <form onSubmit={formikProps.handleSubmit} onReset={formikProps.handleReset} >*/}
                    {/* <input
                        type='text' 
                        name='firstName'
                        placeholder='Type your name'
                        value={firstName}
                        onChange={this.changeHandler}/> */}
                        <Field name='firstName' placeholder='Type your name'/>
                        <ErrorMessage name='firstName' />
                        <Field name='lastName' placeholder='Type your lastName'/>
                        <ErrorMessage name='lastName' />
                        <Field name='email' placeholder='Type your email'/>
                        <ErrorMessage name='email' />
                        <Field name='password' placeholder='Type your email'/>
                        <ErrorMessage name='password' component="p" />
                    <button type="submit">Submit</button>
                </Form>
                )
            }}
           </Formik>
        );
    }

export default SignUpForm;
