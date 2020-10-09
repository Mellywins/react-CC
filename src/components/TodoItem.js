import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#f3f3f3' }}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
export default TodoItem;
