import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import MoviesListStore from './moviesList/MoviesListStore';
import MovieDetailStore from './movieDetails/MovieDetailStore';
import MoviesListView from './moviesList/components/MoviesListView';
import MovieDetailView from './movieDetails/components/MovieDetailView';

function getStateFromStore() {
  return {
    moviesList: MoviesListStore.getMoviesList(),
    searchText: MoviesListStore.getSearchText(),
    movieDetails: MovieDetailStore.getMovieDetail(),
  };
}

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = getStateFromStore();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    MoviesListStore.addChangeListener(this.onChange);
    MovieDetailStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    MoviesListStore.removeChangeListener(this.onChange);
    MovieDetailStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState(getStateFromStore());
  }

  render() {
    const sectionText = this.state.searchText === '' ? 'Popular movies' : 'Results for "'.concat(this.state.searchText).concat('"');
    const sectionHeader = <Header as="h2" dividing>{sectionText}</Header>;
    let content;

    if (this.state.movieDetails) {
      content = (
        <MovieDetailView />
      );
    } else {
      content = (
        <Container>
          {sectionHeader}
          <Header as="h1" />
          <MoviesListView moviesList={this.state.moviesList} />
        </Container>
      );
    }

    return (
      <Container>
        {content}
      </Container>
    );
  }
}

export default Movie;
