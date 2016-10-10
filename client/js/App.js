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
	}

  render () {
    return (
      <div className='app'>
        <div className='container'>
          <div className='leftSide'>
            <div className='buyDefBtn'></div>
            <div className='buyDefRow1'>
              <div className='buyD1Btn'></div>
              <div className='buyD2Btn'></div>
              <div className='buyD3Btn'></div>
              <div className='buyD4Btn'></div>
            </div>
            <div className='buyDefRow2'>
              <div className='buyD5Btn'></div>
              <div className='buyD6Btn'></div>
              <div className='buyD7Btn'></div>
              <div className='buyD8Btn'></div>
            </div>
          </div>

          <div className='mainBtn'></div>

          <div className='rightSide'>
            <div className='buyOffBtn'></div>
            <div className='buyOffRow1'>
              <div className='buyO1Btn'></div>
              <div className='buyO2Btn'></div>
              <div className='buyO3Btn'></div>
              <div className='buyO4Btn'></div>
            </div>
            <div className='buyOffRow2'>
              <div className='buyO5Btn'></div>
              <div className='buyO6Btn'></div>
              <div className='buyO7Btn'></div>
              <div className='buyO8Btn'></div>
            </div>
          </div>
        </div>
      </div>
      )
  }

 };

 ReactDOM.render(<App/>, document.getElementById('app'));

