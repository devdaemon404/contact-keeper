import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return <h5 className="my-2">Please add a contact</h5>
    }

    return (
        <Fragment>
            <div className="container-fluid">
                {
                    filtered !== null
                        ? filtered.map(contact =>
                            <ContactItem key={contact.id} contact={contact} />)
                        : contacts.map(contact =>
                            <ContactItem key={contact.id} contact={contact} />)
                }
            </div>

        </Fragment>
    )
}

export default Contacts;
