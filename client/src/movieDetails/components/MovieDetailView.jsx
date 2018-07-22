import React, { Component } from 'react';
import { Grid, Image, Divider, Header } from 'semantic-ui-react';

import MovieDetailStore from '../MovieDetailStore';

function getStateFromStore() {
  return {
    movieDetail: MovieDetailStore.getMovieDetail(),
  };
}

class MovieDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = getStateFromStore();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    MovieDetailStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    MovieDetailStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState(getStateFromStore());
  }

  render() {
    return (
      <div>
        <Grid stackable>
          <Grid.Column width={7}>
            <Image
              src={this.state.movieDetail.Poster}
              fluid
            />
            <Divider section />
          </Grid.Column>
          <Grid.Column width={9}>
            <Header as="h2">
              {this.state.movieDetail.Title} ({this.state.movieDetail.Year})
            </Header>

            <Header size="medium">GENRE</Header>
            <p>{this.state.movieDetail.Genre}</p>

            <Header size="medium">PLOT</Header>
            <p>{this.state.movieDetail.Plot}</p>

            <Header size="medium">ACTORS</Header>
            <p>{this.state.movieDetail.Actors}</p>

            <Header size="medium">AWARDS</Header>
            <p>{this.state.movieDetail.Awards}</p>

            <Header size="medium">RELEASE DATE</Header>
            <p>{this.state.movieDetail.Released}</p>

            <Header size="medium">BOX OFFICE</Header>
            <p>{this.state.movieDetail.BoxOffice}</p>

            <Header size="medium">RATING</Header>
            <span>{this.state.movieDetail.imdbRating}</span>

            <Header size="medium">RUNTIME</Header>
            <p>{this.state.movieDetail.Runtime}</p>

          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MovieDetailView;
