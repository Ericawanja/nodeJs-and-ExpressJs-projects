import React, { Component } from 'react'
import Counter from './components/Counter';
import Hover from './components/Hover';
import List from './components/List';
import WithCounter from './components/WithCounter';
import WithLoading from './components/WithLoading';


const ListWithLoading = WithLoading(List)
const CounterWithCounter = WithCounter(Counter)
const HoverWithCounter = WithCounter(Hover)

export class App extends Component {
  state = {}

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/hacktivist123/repos`)
      .then((res) => res.json())
      .then(data => {
        this.setState({ loading: false, repos: data })
      })
  }
  render() {
    return (
      <div>
        <HoverWithCounter/>
        <CounterWithCounter />
        <ListWithLoading isLoading={this.state.loading} repos={this.state.repos} />
      </div>
    )
  }
}

export default App
