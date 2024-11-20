import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../redux/slices/contactsSlice.js';
import { setFilter } from '../redux/slices/filterSlice';

function App() {
  const {
    items: contacts,
    isLoading,
    error,
  } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (name, phone) => {
    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicateContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone }));
  };
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
export default App;
