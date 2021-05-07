/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import './css/addItem.css';

const AddItem = ({ addItem }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log('handlechange', event.target.value);
    setValue(event.target.value);
  };

  const handleSubmitItem = (event) => {
    event.preventDefault();
    console.log('value', value);
    addItem(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitItem}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="New todo..."
        required
      />
      <button type="submit">
        <span className="fa fa-plus" aria-hidden="true" />
      </button>
    </form>
  );
};

export default AddItem;
