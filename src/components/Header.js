/**
 * @author Perlou
 * @Header.js
 * @export Header
 */

var React = require('react');
var TodoTextInput = require('./TodoTextInput');
var TodoActions = require('../actions/TodoActions');

var Header = React.createClass({
	handleSave: function(text){
	    if (text.trim()){
	      TodoActions.create(text);
	    }
	},
	render: function(){
		return (
			<header id="header">
				<h1>Todos</h1>
				<TodoTextInput 
					id="new-todo"
					placeholder="What needs to be done?"      
					onSave={this.handleSave} />
			</header>
		);
	}
});

module.exports = Header;
