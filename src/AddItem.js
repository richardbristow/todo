import React from 'react';
import './css/addItem.css';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitItem = this.handleSubmitItem.bind(this);
  }

  /**
   * Updates AddItem state.value everytime the text field changes
   * @param  {object} event the event that triggers the change
   */
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }


  /**
   * Handles sublmitting of the form.
   * Passes the AddItem state.value to the addItem function.
   * addItem is respnsible for updating the Todo components state.
   * Resets AddItem state.value to an empty string.
   * @param  {object} event the event when a user submits the form
   */
  handleSubmitItem(event) {
    event.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({
      value: '',
    });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmitItem}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="New todo..."
          required
        />
        <button type="submit">
          <span className="fa fa-plus" aria-hidden="true" />
        </button>
        {/* <input type="submit" value="Add" /> */}
      </form>
    );
  }
}

export default AddItem;
