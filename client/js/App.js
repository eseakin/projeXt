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
      <div className='app'></div>
      )
  }

 };

 ReactDOM.render(<App/>, document.getElementById('app'));

