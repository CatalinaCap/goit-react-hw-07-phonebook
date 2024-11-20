import React from 'react';
import styles from './ContactForm.module.css';

function ContactItem({ contact, onDelete }) {
  return (
    <li className={styles.contactItem}>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button className={styles.buttonDelete} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default ContactItem;
