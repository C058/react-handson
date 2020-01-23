import React from 'react';
import {Task} from './task';

export class List extends React.Component {
  render() {
    return (
        <ul className="list">
            <Task title="八百屋に行く">じゃがいも、にんじん、玉ねぎを買う</Task>
            <Task title="肉屋に行く">鶏肉を買う</Task>
            <Task title="米屋に行く">新之助を買う</Task>
        </ul>
    );
  }
}