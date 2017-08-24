import React from 'react';
import './css/todoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  /**
   * Passes the item to delete as an argument to deleteItem.
   * deleteItem is responsible for updating the Todo components state.
   */
  handleDeleteItem() {
    this.props.deleteItem(this.props.item);
  }


  render() {
    return (
      <li>
        <div className="todo-item">
          <button className="item-delete" onClick={this.handleDeleteItem}>
            <i className="fa fa-circle-o" aria-hidden="true" />
            <i className="fa fa-check-circle-o" aria-hidden="true" />
          </button>
          {/* <span className="item-delete" onClick={this.handleDeleteItem}>
            <i className="fa fa-check" aria-hidden="true" />
          </span> */}
          <span className="item-name">{this.props.item.todo}</span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
