class MoviesListController < ApiController
  include MoviesAppHelper

  def show
    @movies_list = MoviesQueryHelper.new.perform_list_request(params[:search_text])

    render formats: :json

  rescue StandardError => e
    render status: :internal_server_error, plain: 'movies list failed to load'
    return
  end
end
