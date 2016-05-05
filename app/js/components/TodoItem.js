var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput');

var classNames = require('classnames');

var TodoItem = React.createClass({

  propTypes: {
   todo: ReactPropTypes.object.isRequired
  },

  getInitialState: function(){
  	return {
  		isEditing: false
  	}
  },

  handleToggleComplete: function(){
    TodoActions.toggleComplete(this.props.todo);
  },

  handleDoubleClick: function(){
    this.setState({isEditing: true});
  },

  handleDestroyClick: function(){
    TodoActions.destroy(this.props.todo.id);
  },

  handleSave: function(text){
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  },

  render: function() {
    var todo = this.props.todo;
    var input;

    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this.handleSave}
          value={todo.text} />;
    }
    return (
    	<li className={classNames({
    		'completed': todo.complete,
    		'editing': this.state.isEditing
    	})} key={todo.id}>
    		<div className="view">
	    		<input 
	    			className="toggle"
	    			type="checkbox"
	    			checked={todo.complete}
	    			onChange={this.handleToggleComplete} />
	    		<label onDoubleClick={this.handleDoubleClick}>
	    			{todo.text}
	    		</label>	
	    		<button className="destroy" onClick={this.handleDestroyClick}></button>
    		</div>
    		{input}
    	</li>
    );
  },

});

module.exports = TodoItem;