import React from 'react';
import ContactItem from './ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/slices/contactsSlice.js';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
}

export default ContactList;
