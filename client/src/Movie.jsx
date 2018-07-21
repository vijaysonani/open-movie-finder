import React, { Component } from 'react';
import { Grid, Header, Divider, Image, Embed, Button, Icon } from 'semantic-ui-react'
import axios from 'axios';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      year: '',
      poster: '',
      plot: '',
      rating: '',
      genres: '',
      runtime: ''
    };
  }

  componentWillMount() {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=877a08ec')
      .then((response) => {
      console.log(response.data);
        this.setState(
          {
            title: response.data.Title,
            year: response.data.Year,
            poster: response.data.Poster,
            plot: response.data.Plot,
            rating: response.data.imdbRating,
            genres: response.data.Genre,
            runtime: response.data.Runtime
          })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid.Column width={5}>
            <Image
              src={this.state.poster}
              fluid
            />
            <Button attached='top'>
              <Icon name='plus'/>
              Add to watchlist
            </Button>

            <Divider section/>

            <h4>RATING</h4>
            <img className='imdb-icon' src="https://lh3.googleusercontent.com/lOC6oCAWrB7TNqvPdgJkQzUyC2pLc63n0iLCBtIE9CF-FFUjbbiAyW9AUPiCfkz3nOUxNE0SVZtxGsKRwDPsHqpOuHYadm2lEhx6wfobYyoPp8CfV3tO65ZTjJ8-91vT9Q7lwrOvDQF_sIOUGJ32TeIYdgWXHLiM3RNYS5LUq1fL71l5nL_37He7XokgUO6lbuwPOm7nNEAyBuyQgYzPgB-hxkzSGeUg6o4Tp7dAz8O3X6Cuhhxew-N23-zgqr4ag3dZ9L4De21WLO-WppAmgh752F4uY4Zt-IrbtxldHnOkve8OX3ktlRCHkrtcdHVL9jCWruyBpn3KZhL2fuMZ9oeWSVU3v4Gpkxb5xlh3MTveT8N45ih3WAYoP6Hm-Jz8qAhMQpfnmSRGzuQaX22FITypo_XeKcvkoSLUQMC1V68nuWcOT2MphDFyMgTjunmLBca74UpL5s3k2_FhJfS0RX0k0Y6IC6bUOL5gWcEu0d4rJv8iJHnXKft4zohH4PryAuE-G2q7rs4Vnb_65grz89QQGmF6OLGUhZowBfnGD8_MRE6Ev9Q92x8hMSFWZJZsz2wNk0eUxnCVSJFNVO1jphG2bSHy6ojYNVe9b-JVVQ3NlJr9KjB6=w64-h32-no"/>
            <span>{this.state.rating}</span>

            <h4>GENRES</h4>
            <p>{this.state.genres}</p>

            <h4>RUNTIME</h4>
            <p>{this.state.runtime}</p>

            <Divider section/>
          </Grid.Column>
          <Grid.Column width={11}>
            <Header as='h2' inverted>
              {this.state.title}
              <Header.Subheader>
                ({this.state.year})
              </Header.Subheader>
            </Header>

            <Embed id='O6Xo21L0ybE' source='youtube'/>

            <h4>PLOT</h4>
            <p>{this.state.plot}</p>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Movie;
