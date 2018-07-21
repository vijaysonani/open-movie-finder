import React, { Component } from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';

class App extends Component {
  constructor () {
    super()
    this.state = {}
    // this.getDrinks = this.getDrinks.bind(this)
    // this.getDrink = this.getDrink.bind(this)
  }
  // componentDidMount () {
  //   this.getDrinks()
  // }
  // fetch (endpoint) {
  //   return new Promise((resolve, reject) => {
  //     window.fetch(endpoint)
  //     .then(response => response.json())
  //     .then(json => resolve(json))
  //     .catch(error => reject(error))
  //   })
  // }
  // getDrinks () {
  //   this.fetch('api/drinks')
  //     .then(drinks => {
  //       this.setState({drinks: drinks})
  //       drinks[0] && this.getDrink(drinks[0].id)
  //     })
  // }
  // getDrink (id) {
  //   this.fetch(`api/drinks/${id}`)
  //     .then(drink => this.setState({drink: drink}))
  // }
  render () {
    return (
      <Container>
        <Container textAlign='center'><Header size='large'>If beauty were time, you would be forever...</Header></Container>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Container textAlign='center'><Header size='large'>Hello beautiful!!</Header></Container>
      </Container>
    );
  }
}

export default App
