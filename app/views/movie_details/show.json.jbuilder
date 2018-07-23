# frozen_string_literal: true

json.key_format! camelize: :lower
unless @movie_details.blank?
  json.movieDetail @movie_details
end
