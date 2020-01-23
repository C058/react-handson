import React from 'react';
import {Task} from './task';

export class List extends React.Component {
  render() {
    return (
        <ul class="list">
            <Task/>
            <Task/>
            <Task/>
        </ul>
    );
  }
}