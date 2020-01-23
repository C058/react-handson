import React from 'react';
import ReactDOM from 'react-dom';
import {Task} from './todoList/task';

class App extends React.Component {
  // ToDoListをstateに定義、初期値は []
  state = {
    todoList: []
  }
  render() {
    return (
      <div>
        <form 
          className="input-form"
          onSubmit={e => {
            //デフォルトイベントキャンセル
            e.preventDefault();
            // idがtitleのElementを取得
            const titleElement = e.target.elements["title"];
            // idがdescriptionのElementを取得
            const descriptionElement = e.target.elements["description"];

            // todoList stateに追加
            this.setState(
              {
                todoList: this.state.todoList.concat({
                  title: titleElement.value,
                  description: descriptionElement.value
                })
              },
              // stateの変更後に入力した値を空にする
              () => {
                titleElement.value = "";
                descriptionElement.value = "";
              }
            )
          }}
        >
          <input type="text" id="title" placeholder="title"></input>
          <input type="text" id="description" placeholder="description"></input>
          <button type="submit">登録</button>
        </form>
        <ul className="list">
          {/* todoList配列の要素数分ToDoListItemコンポーネントを展開 */}
          {this.state.todoList.map(todo => (
            <Task 
              key={todo.title}
              title={todo.title}
              // クリックされたItemをtodoList stateから削除
              onClick={() => {
                this.setState({
                  todoList: this.state.todoList.filter(x => x !== todo)
                })
              }}
            >{todo.description}</Task>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));