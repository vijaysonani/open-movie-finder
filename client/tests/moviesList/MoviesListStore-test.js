import ActionTypes from '../../src/utils/ActionTypes';

jest.dontMock('../../src/moviesList/MoviesListStore');

describe('Movies List Store', () => {
  let AppDispatcher;
  let MoviesListStore;
  let MoviesListWebAPIUtils;
  let callback;

  function dispatchReceiveMoviesList(moviesList) {
    callback({
      type: ActionTypes.RECEIVE_MOVIES_LIST,
      moviesList,
    });
  }

  function dispatchReceiveMoviesListFailure(msg) {
    callback({
      type: ActionTypes.RECEIVE_MOVIES_LIST_FAILURE,
      msg,
    });
  }

  function dispatchMovieSearch(movieId) {
    callback({
      type: ActionTypes.CLICK_SEARCH_MOVIES_BUTTON,
      movieId,
    });
  }

  beforeEach(() => {
    /* eslint-disable global-require */
    AppDispatcher = require('../../src/utils/AppDispatcher');
    MoviesListWebAPIUtils = require('../../src/moviesList/MoviesListWebAPIUtils');
    /* eslint-enable global-require */

    callback = AppDispatcher.register.mock.calls[0][0];
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('initializes data', () => {
    expect(MoviesListStore.getMoviesLists()).toBeNull();
  });

  it('calls getMoviesLists web service when movie list is retrieved', () => {
    dispatchMovieSearch('test');

    expect(MoviesListWebAPIUtils.getMoviesLists).toBeCalledWith('test');
  });

  it('sets movie lists when movie list action returns success', () => {
    dispatchMovieSearch('test');
    dispatchReceiveMoviesList({});

    expect(MoviesListStore.getMoviesLists()).not.toBeNull();
  });

  it('does not set movie lists when movie list action returns failure', () => {
    dispatchMovieSearch('test');
    dispatchReceiveMoviesListFailure('failed');

    expect(MoviesListStore.getMoviesLists()).toBeNull();
  });
});
