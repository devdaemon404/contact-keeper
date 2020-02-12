import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
    return (
        <div className="row mt-3 justify-content-center">
            <div className="column">
                <ContactForm />
            </div>
            <div className="column">
                <Contacts />
            </div>
        </div>
    )
}

export default Home;
