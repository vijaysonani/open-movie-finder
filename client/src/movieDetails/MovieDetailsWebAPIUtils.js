import $ from 'jquery';
import MovieAppUtils from '../utils/MovieAppUtils';
import MovieDetailActionCreators from './MovieDetailActionCreators';

const MovieDetailsWebAPIUtils = {
  getMovieDetail(movieId) {
    const uri = MovieAppUtils.getServerRoute('&i='.concat(movieId));

    $.ajax({
      url: uri,
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
