import React, { Component } from 'react'

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
        <ListWithLoading isLoading={this.state.loading} repos={this.state.repos} />
      </div>
    )
  }
}

export default App
