Rails.application.routes.draw do

  match '/movies_list/:search_text' => 'movies_list#show', via: :get

  match '/movie_details/:movie_id' => 'movie_details#show', via: :get

end
