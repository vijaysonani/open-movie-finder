# frozen_string_literal: true
require 'test_helper'
require 'rspec/rails'

class MovieDetailsControllerTest < ActionDispatch::IntegrationTest
  test 'should get movies details' do
    allow_any_instance_of(MoviesAppHelper::MoviesQueryHelper).to receive(:perform_details_request).and_return({})

    get :show, params: { movie_id: 'TEST' }

    assert_response :success
  end

  test 'raises an exception if movies list fails to load.' do
    allow_any_instance_of(MoviesAppHelper::MoviesQueryHelper).to receive(:perform_details_request).and_raise(ArgumentError)

    expect { get :show, params: { movie_id: 'TEST' } }.to raise_error(Exception)
  end
end
