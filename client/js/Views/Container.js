import React from 'react'
import Button from './Button'

export default class Container extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClick() {
		console.log('click')
	}
	render() {
		return (
		<div className='container'>
			<div className='title'>{this.props.title}</div>
			<div className='btnContainer'>
				{ this.props.buttons.map( (button, index) => <Button side={this.props.title} click={this.props.click} i={index} key={index} details={button}/>) }
			</div>
		</div>
			)
	}
}