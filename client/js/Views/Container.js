import React from 'react'
import Button from './Button'

export default class Container extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
		<div className='container'>
			<div className='title'>THIS SIDE</div>
			{this.props.buttons.map((button)=> <Button details={button}/>)}
		</div>
			)
	}
}