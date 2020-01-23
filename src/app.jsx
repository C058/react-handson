import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from './sub.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <form class="input-form">
          <input type="text"></input>
          <input type="submit"></input>
        </form>
        <ul class="list">
          <li class="list-item">
            <div class="task-title">タスクタイトル1</div>
            <div class="task-description">タスクの説明1</div>
          </li>
          <li class="list-item">
            <div class="task-title">タスクタイトル2</div>
            <div class="task-description">タスクの説明2</div>
          </li>
          <li class="list-item">
            <div class="task-title">タスクタイトル3</div>
            <div class="task-description">タスクの説明3</div>
          </li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));