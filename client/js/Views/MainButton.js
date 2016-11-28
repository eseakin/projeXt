import React from 'react'

export default class MainButton extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div onClick={this.props.mainClick} className="mainButton button large round red">
				Click Me!
			</div>
			)
	}
}