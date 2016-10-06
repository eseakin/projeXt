import React from 'react'
import Button from './Button'

export default class Container extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
		<div className='container'><Button/></div>
			)
	}
}