import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function Filter({ value, onChange }) {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={styles.FindContact}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
