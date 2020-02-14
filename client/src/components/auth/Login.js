import React, { useState } from 'react'

const Login = () => {
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
        console.log('Login Submit');
    }
    return (
        <div className="jumbotron mt-5">
            <form onSubmit={onSubmit}>
                <h4 className="text-center">Account Login</h4>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control" type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" value={password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login;
