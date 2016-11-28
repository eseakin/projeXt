import React from 'react'

export default class Info extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
		<div className='info'>
			<div>
				<span>Mutagen</span><span>{Math.round(this.props.clicks)}</span>
			</div>
		</div>
			)
	}
}