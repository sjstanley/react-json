var React = require('react');

/**
 * Component for editing a boolean.
 * @param  {string} value The value of the boolean.
 */
var BooleanAttribute = React.createClass({

	defaultValue: false,

	render: function(){
		var className = 'jsonBoolean';

		return React.DOM.input({
			type: "checkbox",
			className: className,
			checked: this.props.value,
			onChange: this.updateValue
		});
	},

	setValue: function(){
		this.setState({editing: false});
		this.props.onUpdated( this.state.value );
	},

	updateValue: function( e ){
		this.props.onUpdated( e.target.checked );
	},

	isType: function( value ){
		return typeof value == 'boolean';
	}
});

module.exports = BooleanAttribute;