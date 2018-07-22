import MovieAppUtils from '../utils/MovieAppUtils';

const MovieDetailsWebAPIUtils = {
  getMovieDetail(movieId) {
    const uri = MovieAppUtils.getServerRoute('&i='.concat(movieId));

    $.ajax({
      url: uri,
      type: 'GET',

      success() {
        console.log('SuccessDetails');
      },

      error() {
        console.log('FailedDetails');
      },
    });
  },
};

export default MovieDetailsWebAPIUtils;