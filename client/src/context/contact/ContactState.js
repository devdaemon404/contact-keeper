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
    FILTER_CONTACTS,
    CLEAR_FILTER
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
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact
    const addContact = (contact) => {
        contact.id = uuid.v4();
        dispatch({
            type: ADD_CONTACT,
            payload: contact
        })
    }
    //Delete Contact
    const deleteContact = (id) => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }
    //Set Current Contact
    const setCurrent = (contact) => {
        dispatch({
            type: SET_CURRENT,
            payload: contact
        })
    }
    //Clear Current Contact
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT
        })
    }
    //Update Contact
    const updateContact = (contact) => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: contact
        })
    }
    //Filter Contacts
    const filterContacts = (text) => {
        dispatch({
            type: FILTER_CONTACTS,
            payload: text
        })
    }
    //Clear Filter
    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER
        })
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                updateContact,
                setCurrent,
                clearCurrent,
                filterContacts,
                clearFilter
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState;