import ActionTypes from '../../src/utils/ActionTypes';

jest.dontMock('../../src/movieDetails/MovieDetailStore');

describe('Movie Detail Store', () => {
  let AppDispatcher;
  let MovieDetailStore;
  let MovieDetailsWebAPIUtils;
  let callback;

  function dispatchReceiveMovieDetail(moviesList) {
    callback({
      type: ActionTypes.RECEIVE_MOVIE_DETAIL,
      moviesList,
    });
  }

  function dispatchReceiveMovieDetailFailure(msg) {
    callback({
      type: ActionTypes.RECEIVE_MOVIES_DETAIL_FAILURE,
      msg,
    });
  }

  function dispatchClickMovieItem(movieId) {
    callback({
      type: ActionTypes.CLICK_MOVIE_ITEM,
      movieId,
    });
  }

  beforeEach(() => {
    /* eslint-disable global-require */
    AppDispatcher = require('../../src/utils/AppDispatcher');
    MovieDetailsWebAPIUtils = require('../../src/movieDetails/MovieDetailsWebAPIUtils');
    /* eslint-enable global-require */

    callback = AppDispatcher.register.mock.calls[0][0];
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('initializes data', () => {
    expect(MovieDetailStore.getMovieDetail()).toBeNull();
  });

  it('calls getMovieDetail web service when movie item click action is performed', () => {
    dispatchClickMovieItem('test');

    expect(MovieDetailsWebAPIUtils.getMovieDetail).toBeCalledWith('test');
  });

  it('sets movie details when click movie item action returns success', () => {
    dispatchClickMovieItem('test');
    dispatchReceiveMovieDetail({});

    expect(MovieDetailStore.getMovieDetail()).not.toBeNull();
  });

  it('does not set movie details when click movie item action returns failure', () => {
    dispatchClickMovieItem('test');
    dispatchReceiveMovieDetailFailure('failed');

    expect(MovieDetailStore.getMovieDetail()).toBeNull();
  });
});
