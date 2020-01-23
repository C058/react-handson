import React from 'react';

export class ToDoListForm extends React.Component {
  render() {
    return (
        <form className="input-form">
          <input type="text"></input>
          <input type="submit"></input>
        </form>
    );
  }
}