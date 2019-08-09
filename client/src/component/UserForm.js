import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = () => {

    return(
        <div>
            <h1>Login</h1>
            <Form>
                <Field type="text" name="username" placeholeder="Username" />
                <Field type="password" name="password" placeholeder="Password" />
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