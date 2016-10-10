import React from 'react'

export default class Button extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
		<div className='monster'>
		<div className='outline'>
		  <image src={this.props.details.image} className='inner'/>
		  <div className='glass'></div>
		</div>
		</div>
			)
	}
}