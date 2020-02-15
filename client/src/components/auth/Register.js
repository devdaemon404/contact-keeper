import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = ({ history }) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }
        if (error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = user;

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else
            register({ name, email, password });
    }
    return (
        <div className="jumbotron mt-3">
            <form onSubmit={onSubmit}>
                <h4 className="text-center">Account Register</h4>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control" type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" value={password} onChange={onChange} placeholder="Password" minLength='6' required />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input className="form-control" type="password" name="password2" value={password2} onChange={onChange} placeholder="Confirm Password" minLength='6' required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register;
