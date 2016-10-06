import React from 'react'

export default class Button extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
		<svg height='80' width='40' className="DNA">
			<line className='dna1' x1="0" y1="0" y2="0" x2="40"
	      strokeWidth="2" stroke="black"/>
	      <line className='dna2' x1="0" y1="10" y2="10" x2="40"
	      strokeWidth="2" stroke="black"/>
	      <line className='dna3' x1="0" y1="20" y2="20" x2="40"
	      strokeWidth="2" stroke="black"/>
	      <line className='dna4' x1="0" y1="30" y2="30" x2="40"
	      strokeWidth="2" stroke="black"/>
	      <line className='dna5' x1="0" y1="40" y2="40" x2="40"
	      strokeWidth="2" stroke="black"/>
	      <line className='dna6' x1="0" y1="50" y2="50" x2="40"
	      strokeWidth="2" stroke="black"/>
	      <line className='dna7' x1="0" y1="60" y2="60" x2="40"
	      strokeWidth="2" stroke="black"/>
	      <line className='dna8' x1="0" y1="70" y2="70" x2="40"
	      strokeWidth="2" stroke="black"/>
	      <line className='dna9' x1="0" y1="80" y2="80" x2="40"
	      strokeWidth="2" stroke="black"/>
		</svg>
			)
	}
}