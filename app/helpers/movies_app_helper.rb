# frozen_string_literal: true
require 'net/http'
require 'uri'

module MoviesAppHelper
  class MoviesQueryHelper
    def perform_list_request(search_text)
      raise ArgumentError, 'Expected search text' unless search_text

      uri = "https://www.omdbapi.com/?apikey=877a08ec&s=#{search_text}"
      http = Net::HTTP.new(uri.host, uri.port)
      request = Net::HTTP::Get.new(uri.request_uri)
      response = http.request(request)

      JSON.parse(response.body)
    end

    def perform_details_request(movie_id)
      raise ArgumentError, 'Expected movie id' unless movie_id

      uri = "https://www.omdbapi.com/?apikey=877a08ec&i=#{movie_id}"
      http = Net::HTTP.new(uri.host, uri.port)
      request = Net::HTTP::Get.new(uri.request_uri)
      response = http.request(request)

      JSON.parse(response.body)
    end
  end
end
