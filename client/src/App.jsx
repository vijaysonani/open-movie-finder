import React, { Component } from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';
import Movie from "./Movie";

class App extends Component {
  render () {
    return (
      <div>
        <Container>
          <Movie/>
        </Container>
      </div>
    );
  }
}

export default App;
