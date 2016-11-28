import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Views/Container'
import MainInfo from './Views/MainInfo'


var socket = io.connect('http://localhost:3000');

socket.on('connect', function() {
  console.log('connected to server!!');
});

var App = class extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      availableIncomes: [
        { name: 'upgrade1', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png',
        cps: .3, cost: 15, costUp: .3 },
        { name: 'upgrade2', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png',
        cps: 3, cost: 55, costUp: .3 },
        { name: 'upgrade3', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png',
        cps: 15, cost: 150, costUp: .3 },
        { name: 'upgrade4', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png',
        cps: 35, cost: 600, costUp: .3 },
        { name: 'upgrade5', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png',
        cps: 75, cost: 1700, costUp: .3 }
        ],
      availableMonsters: [
        { name: 'Butterfly', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png' },
        { name: 'Slug', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png' },
        { name: 'Lizard', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png' },
        { name: 'Snake', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png' },
        { name: 'Hawk', image: 'https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png' }
        ],
      clicks: 0,
      cps: 0,
      tick: 10,
      incomes: [.3, 3, 15, 35, 75],
      monsters: [0, 0, 0, 0, 0]
    }
  }
  componentDidMount() {
    this.ticker = setInterval(this.tick.bind(this), 1000 / this.state.tick);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  tick() {
    this.setState( (prevState, props) => {
      return {clicks: prevState.clicks + (prevState.cps / prevState.tick)}
    })
  }

  mainClick() {
    this.setState( (prevState, props) => {
      {clicks: prevState.clicks++}
    })
    console.log('click')
  }

  monsterClick(i, side) {
    if (side === 'left side') {
      if (this.state.clicks >= this.state.availableIncomes[i].cost)
      this.setState( (prevState, props) => {
        return {cps: prevState.cps + prevState.availableIncomes[i].cps,
          clicks: prevState.clicks - prevState.availableIncomes[i].cost }
      })
      this.setState({availableIncomes[i].cost: prevState.availableIncomes[i].cost * prevState.availableIncomes[i].costUp})
// availableIncomes[i].cost: prevState.availableIncomes[i].cost * prevState.availableIncomes[i].costUp
    } else if (side === 'right side') {
      console.log('monster click')
    }
  }

  render () {
    return (
      <div className='app'>
        <Container title={'left side'} click={this.monsterClick.bind(this)} buttons={this.state.availableIncomes }/>
        <MainInfo clicks={this.state.clicks} mainClick={this.mainClick.bind(this)} />
        <Container title={'right side'} click={this.monsterClick.bind(this)} buttons={this.state.availableMonsters}/>
        </div>
      )
  }

 };

 ReactDOM.render(<App/>, document.getElementById('app'));

