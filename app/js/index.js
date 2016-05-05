var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('./components/TodoApp');

require('style-loader!css-loader!../css/app.css');
require('style-loader!css-loader!../../todomvc-common/base.css');

ReactDOM.render(
	<TodoApp />,
	document.getElementById('todoapp')
);	