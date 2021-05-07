import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const StyledTodoItem = styled.li`
  padding: 15px 0;
  list-style: none;

  button {
    background: ${({ theme }) => theme.lightGrey};
    border: 0;
    border-radius: 4px 4px 0 0;
    margin-right: 15px;
    padding: 10px;
    cursor: pointer;

    .fa-circle {
      font-size: 16px;
      color: ${({ theme }) => theme.darkerGrey};
    }

    .fa-check-circle {
      color: ${({ theme }) => theme.darkestGrey};
      font-size: 16px;
      display: none;
    }

    &:hover {
      background: ${({ theme }) => theme.darkerGrey};
      transition: 0.3s;

      .fa-circle {
        transition: 0.3s;
        display: none;
      }

      .fa-check-circle {
        display: inline-block;
      }
    }
  }

  span {
    font-size: 16px;
    color: ${({ theme }) => theme.darkestGrey};
  }

  div {
    border-bottom: 2px solid ${({ theme }) => theme.lightGrey};

    &:hover {
      border-color: ${({ theme }) => theme.darkerGrey};
      transition: 0.3s;

      button {
        background: ${({ theme }) => theme.darkerGrey};
        transition: 0.3s;
      }

      .fa-circle {
        color: ${({ theme }) => theme.lightGrey};
        transition: 0.3s;
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
