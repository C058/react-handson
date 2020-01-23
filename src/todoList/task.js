import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Task extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
        <li className="list-item">
        <div className="task-title">{this.props.title}</div>
        <div className="task-description">{this.props.children}</div>
        </li>
    );
  }
}

// Props のバリデーション
Task.propTypes = {
    // 文字列（必須）
    title: PropTypes.string.isRequired,
    // 呼び出し元の開始タグと終了タグの間にある要素が入る特別な Props
    children: PropTypes.any.isRequired,
};