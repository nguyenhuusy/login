import React, { Component } from 'react';

class Icon extends Component {
	render() {
		return (
			<a {...this.props}>
				{this.props.children}
			</a>
		)
	}
}

export default Icon;