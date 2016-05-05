var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({
	propTypes: {
	    className: ReactPropTypes.string,
	    id: ReactPropTypes.string,
	    placeholder: ReactPropTypes.string,
	    onSave: ReactPropTypes.func.isRequired,
	    value: ReactPropTypes.string		
	},
	getInitialState: function(){
		return {
			value: this.props.value||''
		};
	},
	handleKeyDown: function(ev){
		if(ev.keyCode == ENTER_KEY_CODE){
			this.handleSave()
		}
	},
	handleSave: function(){
		this.props.onSave(this.state.value);
		this.setState({
			value: ''
		});
	},
	handleChange: function(ev){
		this.setState({
			value: ev.target.value
		});
	},
	render: function(){
		return (
			<input
				type="text"
		        className={this.props.className}
		        id={this.props.id}
				placeholder={this.props.placeholder}
				onBlur={this.handleSave}
				onChange={this.handleChange}
				onKeyDown={this.handleKeyDown}
				value={this.state.value}
				autoFocus={true} />
		);
	}
});

module.exports = TodoTextInput;