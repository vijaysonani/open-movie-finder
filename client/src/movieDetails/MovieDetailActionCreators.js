import AppDispatcher from '../utils/AppDispatcher';
import ActionTypes from '../utils/ActionTypes';

const MovieDetailActionCreators = {
  clickMovieItem(movieId) {
    AppDispatcher.dispatch({
      type: ActionTypes.CLICK_MOVIE_ITEM,
      movieId,
    });
  },

  receiveMovieDetailSuccess(movieDetail) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_MOVIE_DETAIL,
      movieDetail,
    });
  },

  receiveMovieDetailFailure(msg) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_MOVIES_DETAIL_FAILURE,
      msg,
    });
  },

};

export default MovieDetailActionCreators;
