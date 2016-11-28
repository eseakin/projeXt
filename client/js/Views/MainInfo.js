import React from 'react'
import MainButton from './MainButton'
import Info from './Info'

export default class MainInfo extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
		<div className='mainInfo'>
			<div className='infoContainer'>
				<MainButton mainClick={this.props.mainClick} />
				<Info clicks={this.props.clicks} />
			</div>
		</div>
			)
	}
}