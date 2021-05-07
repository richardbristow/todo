import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const StyledTodoItem = styled.li`
  padding: 15px 0;

  div {
    border-bottom: 2px solid #d3d7dd;

    &:hover {
      border-color: #b6bdc7;
      -webkit-transition: 0.3s;
      transition: 0.3s;

      button {
        background: #b6bdc7;
        -webkit-transition: 0.3s;
        transition: 0.3s;
      }

      .fa-circle {
        color: #d3d7dd;
        -webkit-transition: 0.3s;
        transition: 0.3s;
      }
    }

    span {
      font-size: 16px;
      color: #2c3139;
    }

    button {
      background: #d3d7dd;
      border: 0;
      border-radius: 4px 4px 0 0;
      margin-right: 15px;
      padding: 10px;
      cursor: pointer;

      .fa-circle {
        font-size: 16px;
        color: #b6bdc7;
      }

      .fa-check-circle {
        color: #2c3139;
        font-size: 16px;
        display: none;
      }

      &:hover {
        background: #b6bdc7;
        -webkit-transition: 0.3s;
        transition: 0.3s;

        .fa-circle {
          -webkit-transition: 0.3s;
          transition: 0.3s;
          display: none;
        }

        .fa-check-circle {
          display: inline-block;
        }
      }
    }
  }
`;

const TodoItem = ({ deleteItem, item }) => (
  <StyledTodoItem>
    <div>
      <button type="button" onClick={() => deleteItem(item)}>
        <FontAwesomeIcon className="fa-circle" icon={faCircle} />
        <FontAwesomeIcon className="fa-check-circle" icon={faCheckCircle} />
      </button>
      <span>{item.todo}</span>
    </div>
  </StyledTodoItem>
);

TodoItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    identifierKey: PropTypes.string,
    todo: PropTypes.string,
  }).isRequired,
};

export default TodoItem;
