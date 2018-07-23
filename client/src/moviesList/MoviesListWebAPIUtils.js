import $ from 'jquery';
import MoviesListActionCreators from './MoviesListActionCreators';

const MoviesListWebAPIUtils = {
  getMoviesLists(searchText) {
    const uri = 'movies_list/'.concat(searchText === '' ? 'star' : searchText);

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
