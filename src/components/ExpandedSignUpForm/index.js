import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {subYears, format} from 'date-fns';

const initialStates = {
    firstName: '',
    lastName: '',
    email: '',
    pass: '',
    repeatPass: '',
    birthday: format(new Date(), 'yyyy-MM-dd'),
    agreement: false
}


const SighUpSCHEMA = yup.object({
    firstName: yup.string().min(1),
    lastName: yup.string().min(1),
    email: yup.string().email(),
    pass: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Password must have at least 1 big letter, 1 small letter, 1 special symbol at be more than 8 symbols length'),
    repeatPass: yup.string().oneOf([yup.ref('pass')]),
    birthday: yup.date().max(subYears(new Date(), 18), 'You must be older than 18'),
    agreement: yup.bool().oneOf([true], 'You must agree')
})

const ExpandedSignUpForm = () => {

   const submitHandler = (values, methods) => {
    console.log(values);
    console.log(methods);

   } 

    return (
        <Formik
        initialValues={initialStates}
        validationSchema={SighUpSCHEMA}
        onSubmit={submitHandler}
        >
            {(formikProps)=>(
                <Form>
                    <Field name='firstName' placeholder='name'/>
                    <ErrorMessage name='firstName'/>
                    <Field name='lastName' placeholder='lastName'/>
                    <ErrorMessage name='lastName'/>
                    <Field name='email' placeholder='email'/>
                    <ErrorMessage name='email'/>
                    <Field name='pass' placeholder='pass'/>
                    <ErrorMessage name='pass'/>
                    <Field name='repeatPass' placeholder='repeat pass'/>
                    <ErrorMessage name='repeatPass'/>
                    <Field type='date' name='birthday' />
                    <ErrorMessage name='birthday'/>
                    <label>
                    <Field type='checkbox' name='agreement' />
                    Are you agree with rules
                    <ErrorMessage name='agreement'/>
                    </label>
                    <button type="submit">Submit</button>
                </Form>
            )
            }
        </Formik>
    );
}

export default ExpandedSignUpForm;

/*
Створити розширену форму реєстрації, яка містить поля:
1. Ім'я (не менше 1 літери)
2. Прізвище (не менше 1 літери)
3. Мейл (має відповідати мейлу)
4. Пароль (має містити від 8 символів, з великими, маленькими, спецсимволами)
5. Повтор паролю (має співпадати з полем "пароль")
6. День народження (дата) (користувачу має бути 18 років)
7. Чи погоджується користувач з умовами сайту

При відправці форми перевірити, чи погодився користувач


Умови валідації (ВСІ) мають бути задані через yup

*/
