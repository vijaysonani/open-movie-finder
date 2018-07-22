import { EventEmitter } from 'events';
import assign from 'object-assign';

import MovieDetailsWebAPIUtils from './MovieDetailsWebAPIUtils';
import AppDispatcher from '../utils/AppDispatcher';
import ActionTypes from '../utils/ActionTypes';

const CHANGE_EVENT = 'change';

let movieDetail = null;

const MovieDetailStore = assign({}, EventEmitter.prototype, {

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getMovieDetail() {
    return movieDetail;
  },

});

MovieDetailStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.CLICK_MOVIE_ITEM:
      MovieDetailsWebAPIUtils.getMovieDetail(action.movieId);
      MovieDetailStore.emitChange();
      break;
    case ActionTypes.RECEIVE_MOVIE_DETAIL:
      movieDetail = action.movieDetail;
      MovieDetailStore.emitChange();
      break;
    case ActionTypes.RECEIVE_MOVIES_DETAIL_FAILURE:
      console.log(action.msg);
      MovieDetailStore.emitChange();
      break;
    case ActionTypes.CLICK_SEARCH_MOVIES_BUTTON:
      movieDetail = null;
      break;
    default:
    // do nothing
  }
});

export default MovieDetailStore;
