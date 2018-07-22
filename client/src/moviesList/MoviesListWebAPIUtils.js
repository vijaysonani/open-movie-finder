import $ from 'jquery';
import MovieAppUtils from '../utils/MovieAppUtils';
import MoviesListActionCreators from './MoviesListActionCreators';

const MoviesListWebAPIUtils = {
  getMoviesLists(keyword) {
    const uri = MovieAppUtils.getServerRoute('&s='.concat(keyword));

    $.ajax({
      url: uri,
      type: 'GET',

      success(data) {
        MoviesListActionCreators.receiveMovieListSuccess(data);
      },

      error() {
        MoviesListActionCreators.receiveMovieListFailure();
      },
    });
  },
};

export default MoviesListWebAPIUtils;
