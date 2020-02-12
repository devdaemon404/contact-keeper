import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                "type": "professional",
                "date": "2020-02-12T04:21:38.514Z",
                "id": 1,
                "name": "Loper Lohitha",
                "email": "loper@mini_mini_powderl.com",
                "phone": "769696969697",
                "user": "5e4371786aacfd1bf0a9b892"
            },
            {
                "type": "professional",
                "date": "2020-02-12T04:21:38.514Z",
                "id": 2,
                "name": "Sofware Sommanna",
                "email": "sommana@mini_mini_powder.com",
                "phone": "769696969697",
                "user": "5e4371786aacfd1bf0a9b892"
            },
            {
                "type": "personal",
                "date": "2020-02-12T04:21:38.514Z",
                "id": 3,
                "name": "Sade Manja",
                "email": "sademanja@mini_mini_powder.com",
                "phone": "769696969697",
                "user": "5e4371786aacfd1bf0a9b892"
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact

    //Delete Contact

    //Set Current Contact

    //Clear Current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState;