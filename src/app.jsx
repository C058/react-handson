import React from 'react';
import ReactDOM from 'react-dom';
import {ToDoListForm} from './todoList/form';
import {List} from './todoList/list';

class App extends React.Component {
  render() {
    return (
      <div>
        <ToDoListForm />
        <List />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));