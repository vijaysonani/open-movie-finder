import React from 'react';
import { Button, Container, Header, Segment } from 'semantic-ui-react';

import Movie from './Movie';
import SearchView from './moviesList/components/SearchView';
import MoviesListWebAPIUtils from './moviesList/MoviesListWebAPIUtils';

const App = () => (
  <Container style={{ marginTop: '2em' }}>
    <Segment clearing inverted>
      <Header as="h1" floated="left" onClick={() => MoviesListWebAPIUtils.getMoviesLists('')}>Movie Finder</Header>
      <Header as="h1" floated="right" inverted>
        <Button content="GitHub" primary onClick={() => { window.open('https://github.com/vijaysonani/open-movie-finder'); }} />
      </Header>
    </Segment>

    <Header as="h3" dividing />
    <Header as="h1" />

    <Container>
      <SearchView />
    </Container>

    <Header as="h1" />
    <Header as="h1" />

    <Movie />
  </Container>
);

export default App;
