import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
    return (
        <div className="row mt-3 justify-content-center">
            <div className="col">
                <ContactForm />
            </div>
            <div className="col">
                <Contacts />
            </div>
        </div>
    )
}

export default Home;
