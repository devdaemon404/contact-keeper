import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = ({ history }) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;
    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }
        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, history])
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger')
        } else {
            login({
                email,
                password
            })
        }
    }
    return (
        <div className="jumbotron mt-3">
            <form onSubmit={onSubmit}>
                <h4 className="text-center">Account Login</h4>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control" type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login;
