import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { addContact } from '../redux/slices/contactsSlice';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();

    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (duplicateContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.ContactFormClass} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className={styles.InputClass}
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
      />
      <label htmlFor="number">Number</label>
      <input
        className={styles.InputClass}
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.ButtonClass} type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
