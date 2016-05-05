var React = require('react');
var Header = require('./Header');
var MainSection = require('./MainSection');
var Footer = require('./Footer');
var TodoStore = require('../stores/TodoStore');

function getTodoState(){
	return {
		allTodos: TodoStore.getAll(),
		areAllComplete: TodoStore.areAllComplete()
	}
}

var TodoApp = React.createClass({

  	getInitialState: function(){
  		return getTodoState();
  	},

  	componentDidMount: function(){
  		TodoStore.addChangeListener(this.handleChange);
  	},

  	componentWillUnmount: function(){
  		TodoStore.removeChangeListener(this.handleChange);
  	},

  	handleChange: function(){
  		this.setState(getTodoState());
  	},

	render: function(){
		return (
			<div>
				<Header />
				<MainSection
					allTodos={this.state.allTodos}
					areAllComplete={this.state.areAllComplete} />
				<Footer
					allTodos={this.state.allTodos} />
			</div>
		);
	}
});

module.exports = TodoApp;