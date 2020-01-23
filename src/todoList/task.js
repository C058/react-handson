import React from 'react';

export class Task extends React.Component {
  render() {
    return (
        <li class="list-item">
        <div class="task-title">{this.props.title}</div>
        <div class="task-description">{this.props.description}</div>
        </li>
    );
  }
}