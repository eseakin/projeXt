import React from 'react'
import Button from './Button'

export default class Container extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
		<div className='monster'>
		<div className='outline'>
		  <image src="https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png" className='inner'></image>
		  <div className='glass'></div>
		</div>
		</div>
			)
	}
}