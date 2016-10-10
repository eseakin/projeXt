import React from 'react'
import MainButton from './MainButton'
import Info from './Info'

export default class MainInfo extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
		<div className='main-info'>
			<MainButton/>
			<Info/>
		</div>
			)
	}
}