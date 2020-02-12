import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const { addContact, updateContact, clearCurrent, current } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current]);

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
        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll();
    };
    const clearAll = () => {
        clearCurrent();
    }
    return (
        <div className="container-fluid my-2">
            <div className="card border-dark bg-light card-body text-left">
                <form onSubmit={onSubmit}>
                    <h4 className="text-center">{current ? 'Update Contact' : 'Add Contact'}</h4>
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
                            <input className="form-check-input" type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} />
                            <label className="form-check-label">Professional</label>
                        </div>
                    </div>
                    <button type="submit" value={current ? 'Edit Contact' : 'Add Contact'} className="btn btn-primary">Submit</button>
                    {current && <button className="btn btn-secondary ml-2" onClick={clearAll}>Clear</button>}

                </form>
            </div>
        </div>
    )
}

export default ContactForm;
