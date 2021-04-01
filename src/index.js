require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import './App.scss';

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
  );