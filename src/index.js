import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

// Module imports
import TodoItem from './TodoItem';
import AddItem from './AddItem';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
    };
    this.renderTodoItems = this.renderTodoItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.loadFromStorage = this.loadFromStorage.bind(this);
    this.saveToStorage = this.saveToStorage.bind(this);
    // this.testLocalStoreEnabled = this.testLocalStoreEnabled.bind(this);
  }


  componentDidMount() {
    this.loadFromStorage();
  }


  componentDidUpdate() {
    this.saveToStorage();
  }


  // Checks whether localStorage can be saved to.
  // When using Safari in Private Browsing mode and saving
  // user gets the error 'Quota Exceeded'.
  // testLocalStoreEnabled() {
  //   try {
  //     localStorage.setItem('testKey', 'testValue');
  //     localStorage.removeItem('testKey');
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // }


  /**
   * Loads the state from localStorage if available.
   * If not available load from cookes.
   */
  loadFromStorage() {
    if (typeof (Storage) !== 'undefined') {
      // localStorage supported.
      const todos = JSON.parse(localStorage.getItem('todoItems'));
      if (todos) {
        this.setState({
          todoItems: todos,
        });
      }
    } else {
      // Using cookies here :(
      let todos = document.cookie;
      if (todos !== '') {
        todos = todos.split('; ');
        const decodedTodos = [];
        todos.forEach((item) => {
          const splitItem = item.split('=');
          decodedTodos.push(
            {
              identifierKey: splitItem[0],
              todo: splitItem[1],
            },
          );
        });
        this.setState({
          todoItems: decodedTodos,
        });
      }
    }
  }


  /**
   * Saves the state to localStorage if available.
   * If not available save to cookes.
   */
  saveToStorage() {
    if (typeof (Storage) !== 'undefined') {
      // localStorage supported.
      localStorage.setItem('todoItems', JSON.stringify(this.state.todoItems));
    } else {
      // Using cookies here :(
      const todos = this.state.todoItems;
      todos.forEach((item) => {
        document.cookie = `${item.identifierKey}=${item.todo}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      });
    }
  }


  /**
   * Adds a todo item to the state.
   * @param {object} item todo item to add
   */
  addItem(item) {
    const todos = this.state.todoItems;
    todos.push({ todo: item, identifierKey: `task${(todos.length)}` });
    this.setState({
      todoItems: todos,
    });
  }


  /**
   * Deletes a todo item from the state
   * @param {object} item todo item to delete
   */
  deleteItem(item) {
    const todos = this.state.todoItems.filter((val) => {
      return item !== val;
    });
    this.setState({
      todoItems: todos,
    });
  }


  /**
   * Calls <TodoItem /> on each todo in the state for rendering
   * @return {object} the todos to render
   */
  renderTodoItems() {
    let todos = this.state.todoItems;
    todos = todos.map((item) => {
      return (
        <TodoItem item={item} key={item.identifierKey} deleteItem={this.deleteItem} />
      );
    });
    return todos;
  }


  render() {
    return (
      <div className="wrapper">
        <div className="flex-container">
          <div className="flex-item title">
            <h1>Todo List</h1>
          </div>
          <div className="flex-item todo-list">
            <ul>
              {this.renderTodoItems()}
            </ul>
          </div>
          <div className="flex-item add-item-form">
            <AddItem addItem={this.addItem} />
          </div>
          <div className="flex-item footer">
            <p>A simple Todo app made with React.</p>
            <p>It&#39;s ok to close the browser, all items will be saved locally.</p>
            <p>If you use Private browsing or Icognito mode, the app will be
              unable to save changes.</p>
          </div>
        </div>
      </div>
    );
  } // end of render
}

ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);
