import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Task extends Component {

    
  render() {
    // https://qiita.com/uto-usui/items/a9d17447fe81c17c41fa#%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%88%86%E5%89%B2%E4%BB%A3%E5%85%A5
    const {
        title,
        children,
        ...props
      } = this.props;
    return (
        // {...props}と書くことで残った設定が展開される
        //https://qiita.com/Nossa/items/e6f503cbb95c8e6967f8
        <li className="list-item" {...props}>
        <div className="task-title">{title}</div>
        <div className="task-description">{children}</div>
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