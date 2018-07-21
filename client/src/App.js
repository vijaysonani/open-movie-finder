import React, { Component } from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';

class App extends Component {
  render () {
    return (
      <Container>
        <Container textAlign='center'><Header size='large'>If beauty were time, you would be forever...</Header></Container>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Container textAlign='center'><Header size='large'>Hello, beautiful!!</Header></Container>
      </Container>
    );
  }
}

export default App
