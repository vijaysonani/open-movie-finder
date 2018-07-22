import AppDispatcher from '../utils/AppDispatcher';
import ActionTypes from '../utils/ActionTypes';

const MoviesListActionCreatores = {
  clickMovieSearch(searchText) {
    AppDispatcher.dispatch({
      type: ActionTypes.CLICK_SEARCH_MOVIES_BUTTON,
      searchText,
    });
  },

  receiveMovieListSuccess(moviesList) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_MOVIES_LIST,
      moviesList,
    });
  },

  receiveMovieListFailure(msg) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_MOVIES_LIST_FAILURE,
      msg,
    });
  },

};

export default MoviesListActionCreatores;
