import React, { useState } from 'react'

const ContactForm = () => {
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
    return (
        <div className="container-fluid my-2">
            <div className="card border-dark bg-light card-body text-left">
                <form>
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
                        <h6>Contact Type:</h6>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="type" value="personal" checked={type === 'personal'} />
                            <label className="form-check-label">Personal</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="type" value="professional" checked={type === 'professional'} />
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
