import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched }) => {

    return(
        <div>
            <h1>Login</h1>
            <Form>
                <Field type="text" name="username" placeholeder="Username" />
                {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )}

                <Field type="password" name="password" placeholeder="Password" />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}

                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ username, password}) {
        return {
            username: username || '',
            passwoed: password || ''
        }
    },

    ValidationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    }),


    handleSubmit(values, { setStatus }) {
        axios
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                setStatus(res.data)
            })
            .catch(err => console.log(err.response))
    }
})(UserForm)



export default FormikUserForm;