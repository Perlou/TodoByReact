import 'core-js/fn/object/assign';
var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('./components/TodoApp');

require('./styles/App.css');
require('./styles/todomvc-common/base.css');

ReactDOM.render(
	<TodoApp />,
	document.getElementById('todoapp')
);	
