import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
        logout();
    }

    const authLinks = (
        <Fragment>
            <li style={{ marginLeft: "10px" }} className="nav-item">
                <button className="btn btn-light" disabled={true}>Hello {user && user.name}</button>
            </li>
            <li style={{ marginLeft: "10px" }} className="nav-item">
                <button onClick={onLogout} className="btn btn-outline-light"><i className="fas fa-sign-out-alt mr-1"></i>Logout</button>
            </li>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
            <li style={{ marginLeft: "10px" }} className="nav-item">
                <Link to="/register">
                    <button className="btn btn-outline-light">Register</button>
                </Link>
            </li>
            <li style={{ marginLeft: "10px" }} className="nav-item">
                <Link to="/login">
                    <button className="btn btn-outline-light">Login</button>
                </Link>
            </li>
            <li style={{ marginLeft: "10px" }} className="nav-item">
                <Link to="/about">
                    <button className="btn btn-outline-light">About</button>
                </Link>
            </li>
        </Fragment>
    )
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <i className={icon} />
                {' ' + title}
            </Link>
            <ul className="nav">
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar;
