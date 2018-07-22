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
        if (data && data.Response === 'True') {
          MoviesListActionCreators.receiveMovieListSuccess(data);
        } else {
          MoviesListActionCreators.receiveMovieListFailure('Too many search results returned. Please narrow your search.');
        }
      },

      error() {
        MoviesListActionCreators.receiveMovieListFailure('Movies list retrieval failed.');
      },
    });
  },
};

export default MoviesListWebAPIUtils;
