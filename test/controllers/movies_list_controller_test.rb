# frozen_string_literal: true
require 'test_helper'
require 'rspec/rails'

class MoviesListControllerTest < ActionDispatch::IntegrationTest
  test 'should get movies list' do
    allow_any_instance_of(MoviesAppHelper::MoviesQueryHelper).to receive(:perform_list_request).and_return({})

    get :show, params: { search_text: 'TEST' }

    assert_response :success
  end

  test 'raises an exception if movies list fails to load.' do
    allow_any_instance_of(MoviesAppHelper::MoviesQueryHelper).to receive(:perform_list_request).and_raise(ArgumentError)

    expect { get :show, params: { search_text: 'TEST' } }.to raise_error(Exception)
  end
end
