/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './css/addItem.css';

const AddItem = ({ addItem }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addItem(value);
        setValue('');
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
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
