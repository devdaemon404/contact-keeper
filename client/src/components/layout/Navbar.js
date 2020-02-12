import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <i className={icon} />
                {' ' + title}
            </Link>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/">
                        <button className="btn btn-outline-light">Home</button>
                    </Link>
                </li>
                <li style={{ marginLeft: "10px" }} className="nav-item">
                    <Link to="/about">
                        <button className="btn btn-outline-light">About</button>
                    </Link>
                </li>
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
