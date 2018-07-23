class MovieDetailsController < ApiController
  include MoviesAppHelper

  def show
    @movie_details = MoviesQueryHelper.new.perform_details_request(params[:search_text])

    render formats: :json

  rescue StandardError => e
    render status: :internal_server_error, plain: 'movie details failed to load'
    return
  end
end
