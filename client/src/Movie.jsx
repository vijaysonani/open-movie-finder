import React, { Component } from 'react';

import MoviesListStore from './moviesList/MoviesListStore';
import MoviesListActionCreators from './moviesList/MoviesListActionCreators';
import MoviesListView from './moviesList/components/MoviesListView';

function getStateFromStore() {
  return {
    movies: MoviesListStore.getMoviesList(),
  };
}

class Movie extends Component {
  constructor(props) {
    super(props);
    MoviesListActionCreators.clickMovieSearch('star');
    this.state = getStateFromStore();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    MoviesListStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    MoviesListStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState(getStateFromStore());
  }

  render() {
    return (
      <MoviesListView moviesList={this.state.movies} />
    );
  }
}

export default Movie;
