import React, { useState, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;
    const onChange = e => setContact({
        ...contact,
        [e.target.name]: e.target.value
    });

    const onSubmit = (e) => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }
    return (
        <div className="container-fluid my-2">
            <div className="card border-dark bg-light card-body text-left">
                <form onSubmit={onSubmit}>
                    <h4 className="text-center">Add Contact</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control my-2"
                            placeholder="Name"
                            name='name'
                            value={name}
                            onChange={onChange}
                        />
                        <input
                            type="email"
                            className="form-control my-2"
                            placeholder="Email"
                            name='email'
                            value={email}
                            onChange={onChange}
                        />
                        <input
                            type="text"
                            className="form-control my-2"
                            placeholder="Phone"
                            name='phone'
                            value={phone}
                            onChange={onChange}
                        />
                        <h6 className="lead">Contact Type:</h6>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} />
                            <label className="form-check-label">Personal</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange}/>
                            <label className="form-check-label">Professional</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
