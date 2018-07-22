import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Header } from 'semantic-ui-react';

import MovieDetailActionCreators from '../../movieDetails/MovieDetailActionCreators';

function onClick(movieID) {
  MovieDetailActionCreators.clickMovieItem(movieID);
}

function buildMoviesListItemNodes(moviesList) {
  if (moviesList && moviesList.length) {
    return moviesList.map(movieItem => (
      <Grid.Column className="content" key={movieItem.imdbID} onClick={() => onClick(movieItem.imdbID)}>
        <Image
          verticalAlign="middle"
          centered
          fluid
          src={movieItem.Poster === 'N/A' ? 'defaultMoviePoster.jpg' : movieItem.Poster}
        />
        <Header size="medium" textAlign="center">{movieItem.Title} ({movieItem.Year})</Header>
      </Grid.Column>
    ));
  }

  return (
    <Grid.Column className="content">
      <Header size="medium" textAlign="center">No results found</Header>
    </Grid.Column>
  );
}

const MoviesListView = props => (
  <Grid stackable columns={3}>
    {buildMoviesListItemNodes(props.moviesList)}
  </Grid>
);

MoviesListView.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      poster: PropTypes.string,
      title: PropTypes.string,
      year: PropTypes.string,
    }),
  ),
};

export default MoviesListView;
