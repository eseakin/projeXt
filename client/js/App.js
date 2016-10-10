import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Views/Container'

var socket = io.connect('http://localhost:3000');

socket.on('connect', function() {
  console.log('connected to server!!');
});

var App = class extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      availableIncomes: [{name: 'upgrade1', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png' }],
      availableMonsters: [{name: 'butterfly', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png'}]
    }
	}

  render () {
    return (
      <div className='app'>
        <Container buttons={this.state.availableIncomes}/>
        <MainInfo/>
        <Container buttons={this.state.availableMonsters}/>
        </div>
      )
  }

 };

 ReactDOM.render(<App/>, document.getElementById('app'));

