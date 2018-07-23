import $ from 'jquery';
import MovieDetailActionCreators from './MovieDetailActionCreators';

const MovieDetailsWebAPIUtils = {
  getMovieDetail(movieId) {
    $.ajax({
      url: 'movie_details/'.concat(movieId),
      type: 'GET',

      success(data) {
        MovieDetailActionCreators.receiveMovieDetailSuccess(data);
      },

      error() {
        MovieDetailActionCreators.receiveMovieDetailFailure('Movie details could not be retrieved.');
      },
    });
  },
};

export default MovieDetailsWebAPIUtils;
