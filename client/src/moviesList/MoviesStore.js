import { EventEmitter } from 'events';
import assign from 'object-assign';

import MoviesWebAPIUtils from './MoviesWebAPIUtils';
import AppDispatcher from '../utils/AppDispatcher';
import ActionTypes from '../utils/ActionTypes';

const CHANGE_EVENT = 'change';

let moviesList = null;

const MoviesStore = assign({}, EventEmitter.prototype, {

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getMoviesList() {
    return moviesList;
  },

});

MoviesStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.CLICK_SEARCH_MOVIES_BUTTON:
      MoviesWebAPIUtils.getMoviesLists(action.searchText);
      MoviesStore.emitChange();
      break;
    case ActionTypes.RECEIVE_MOVIES_LIST:
      moviesList = action.moviesList;
      MoviesStore.emitChange();
      break;
    case ActionTypes.RECEIVE_MOVIES_LIST_FAILURE:
      console.log('Movies list retrieval failed.');
      MoviesStore.emitChange();
      break;
    default:
    // do nothing
  }
});

module.exports = MoviesStore;
