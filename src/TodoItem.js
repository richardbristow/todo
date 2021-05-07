/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './css/todoItem.css';

const TodoItem = ({ deleteItem, item }) => (
  <li>
    <div className="todo-item">
      <button className="item-delete" onClick={() => deleteItem(item)}>
        <i className="fa fa-circle-o" aria-hidden="true" />
        <i className="fa fa-check-circle-o" aria-hidden="true" />
      </button>
      <span className="item-name">{item.todo}</span>
    </div>
  </li>
);

export default TodoItem;
