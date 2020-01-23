import React from 'react';

export class ToDoListForm extends React.Component {
  render() {
    return (
        <form className="input-form">
          <input type="text" id="title" placeholder="title"></input>
          <input type="text" id="description" placeholder="description"></input>
          <button type="submit">登録</button>
        </form>
    );
  }
}