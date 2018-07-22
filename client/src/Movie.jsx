import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import axios from 'axios';

import MoviesListActionCreators from './moviesList/MoviesListActionCreators';

const GridExampleDoubling = props => (
  <Grid stackable columns={3}>
    <Grid.Column>
      <Image
        src={props.poster}
      />
    </Grid.Column>
    <Grid.Column>
      <Image
        src={props.poster}
      />
    </Grid.Column>
    <Grid.Column>
      <Image
        src={props.poster}
      />
    </Grid.Column>
    <Grid.Column>
      <Image
        src={props.poster}
      />
    </Grid.Column>
    <Grid.Column>
      <Image
        src={props.poster}
      />
    </Grid.Column>
  </Grid>
);

GridExampleDoubling.propTypes = {
  poster: PropTypes.string,
};

class Movie extends Component {
  constructor(props) {
    super(props);
    MoviesListActionCreators.clickMovieSearch('star');

    this.state = {
      title: '',
      year: '',
      poster: '',
      plot: '',
      rating: '',
      genres: '',
      runtime: '',
    };
  }

  componentWillMount() {
    axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=877a08ec')
      .then((response) => {
      // console.log(response.data);
        this.setState(
          {
            title: response.data.Title,
            year: response.data.Year,
            poster: response.data.Poster,
            plot: response.data.Plot,
            rating: response.data.imdbRating,
            genres: response.data.Genre,
            runtime: response.data.Runtime,
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <GridExampleDoubling poster={this.state.poster} />

      </div>
    );
  }
}

export default Movie;
