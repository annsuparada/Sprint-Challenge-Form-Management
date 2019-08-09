import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, status, handleSubmit }) => {
    const [users, setUsers] = useState([]);
    
    // console.log(users)

    useEffect(() => {
        if(status) {
            setUsers(users => [...users, status])
        }
    }, [status])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/restricted/data')
            .then(response => 
                setUsers(response.data)   
            )
            
    }, [])

    return(
        <div>
            <div>
            <h1>Login</h1>
                <Form>
                    <Field type="text" name="username" placeholeder="Username"  />
                    {touched.username && errors.username && 
                        <p className="error">{errors.username}</p>
                    }
                    
                    <Field type="password" name="password" placeholeder="Password" />
                    {touched.password && errors.password && 
                        <p className="error">{errors.password}</p>
                    }

                    <button type="submit">Submit</button>
                </Form>
            </div>
            <div>
                {users.map(user => {
                    return(
                        <div>
                            <h2 key={user.id}>{user.name}</h2>
                        </div>
                    ) 
                })}
            </div>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ username, password}) {
        return {
            username: username || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    }),


    handleSubmit(values, { setStatus }) { console.log('values',values)
        axios
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                setStatus(res.data)
            })
            .catch(err => console.log(err.response))
    }
})(UserForm)



export default FormikUserForm;