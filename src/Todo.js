import React, { useEffect, useState } from 'react';
import './css/index.css';

import TodoItem from './TodoItem';
import AddItem from './AddItem';

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    // Load from storage
    if (typeof Storage !== 'undefined') {
      // localStorage supported.
      const todos = JSON.parse(localStorage.getItem('todoItems'));
      if (todos) {
        setTodoItems(todos);
      }
    } else {
      // Using cookies here :(
      let todos = document.cookie;
      if (todos !== '') {
        todos = todos.split('; ');
        const decodedTodos = [];
        todos.forEach((item) => {
          const splitItem = item.split('=');
          decodedTodos.push({
            identifierKey: splitItem[0],
            todo: splitItem[1],
          });
        });
        setTodoItems(decodedTodos);
      }
    }
  }, []);

  useEffect(() => {
    // save to storage
    if (typeof Storage !== 'undefined') {
      // localStorage supported.
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
    } else {
      // Using cookies here :(
      const todos = todoItems;
      todos.forEach((item) => {
        document.cookie = `${item.identifierKey}=${item.todo}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      });
    }
  }, [todoItems]);

  const addItem = (item) => {
    const todos = todoItems;
    todos.push({ todo: item, identifierKey: `task${todos.length}` });
    setTodoItems([...todos]);
  };

  const deleteItem = (item) => {
    const todos = todoItems.filter((val) => item !== val);
    setTodoItems(todos);
  };

  return (
    <div className="wrapper">
      <div className="flex-container">
        <div className="flex-item title">
          <h1>todos.</h1>
        </div>
        <div className="flex-item add-item-form">
          <AddItem addItem={addItem} />
        </div>
        <div className="flex-item todo-list">
          <ul>
            {todoItems.map((item) => (
              <TodoItem
                item={item}
                key={item.identifierKey}
                deleteItem={deleteItem}
              />
            ))}
          </ul>
        </div>
        <div className="flex-item footer">
          <p>A simple Todo app made with React.</p>
          <p>
            It&#39;s ok to close the browser, all items will be saved locally.
          </p>
          <p>
            If you use Private browsing or Incognito mode, the app will be
            unable to save changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
