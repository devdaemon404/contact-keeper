import React from 'react';
import PropTypes from 'prop-types'

const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type } = contact;
    return (
        <div className='card border-dark bg-light my-2'>
            <div className="card-body">
                <div className='text-primary d-flex justify-content-between'>
                    <h5 className="mr-2">{name}</h5>
                    <span
                        className={'align-self-center badge ' +
                            (type === 'professional' ? 'badge-success' : 'badge-primary')}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                </div>
                {email && (<div className="card-text">
                    <i className="fas fa-envelope-open mr-1"></i>{email}
                </div>)}
                {phone && (<div className="card-text">
                    <i className="fas fa-phone mr-1"></i>{phone}
                </div>)}
                <button type="button" className="btn btn-dark btn-sm my-2">Edit</button>
                <button type="button" className="btn btn-danger btn-sm ml-2">Delete</button>
            </div>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem
