import React from 'react'
export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div className='monster' onClick={()=> this.props.click(this.props.i, this.props.side)}>
    <div className='outline'>
      <span className='btnName'>{this.props.details.name}</span>
      <span className='btnPrice'>{this.props.details.cost}</span>
      <image src={this.props.details.image}/>
      <div className='inner'></div>
      <div className='glass'></div>
    </div>
    </div>
      )
  }
}