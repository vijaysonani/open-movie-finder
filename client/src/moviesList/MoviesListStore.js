import { EventEmitter } from 'events';
import assign from 'object-assign';

import MoviesListWebAPIUtils from './MoviesListWebAPIUtils';
import AppDispatcher from '../utils/AppDispatcher';
import ActionTypes from '../utils/ActionTypes';

const CHANGE_EVENT = 'change';

let moviesList = MoviesListWebAPIUtils.getMoviesLists('');
let searchText = '';

const MoviesListStore = assign({}, EventEmitter.prototype, {

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

  getSearchText() {
    return searchText;
  },

});

MoviesListStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.CLICK_SEARCH_MOVIES_BUTTON:
      searchText = action.searchText;
      MoviesListWebAPIUtils.getMoviesLists(searchText);
      MoviesListStore.emitChange();
      break;
    case ActionTypes.RECEIVE_MOVIES_LIST:
      moviesList = action.moviesList.Search;
      MoviesListStore.emitChange();
      break;
    case ActionTypes.RECEIVE_MOVIES_LIST_FAILURE:
      console.log(action.msg);
      MoviesListStore.emitChange();
      break;
    default:
    // do nothing
  }
});

export default MoviesListStore;
