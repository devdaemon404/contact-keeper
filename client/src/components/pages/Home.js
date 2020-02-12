import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
    return (
        <div className="row mt-3 justify-content-center">
            <div className="col">
                <ContactForm />
            </div>
            <div className="col">
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    )
}

export default Home;
