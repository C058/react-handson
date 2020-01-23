import React from 'react';
import {Task} from './task';

export class List extends React.Component {
  render() {
    return (
        <ul className="list">
            <Task title="八百屋に行く" description="じゃがいも、にんじん、玉ねぎを買う"/>
            <Task title="肉屋に行く" description="鶏肉を買う"/>
            <Task title="米屋に行く" description="新之助を買う"/>
        </ul>
    );
  }
}