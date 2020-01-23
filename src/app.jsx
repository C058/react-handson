import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from './sub.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld name="橘真琴" />
        <div>あああああああああ</div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));