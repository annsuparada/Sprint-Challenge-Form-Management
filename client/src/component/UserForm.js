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
                <button>Submit</button>
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
    }
})(UserForm)



export default FormikUserForm;