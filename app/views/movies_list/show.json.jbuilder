# frozen_string_literal: true

json.key_format! camelize: :lower
unless @movies_list.blank?
  json.moviesList @movies_list
end
