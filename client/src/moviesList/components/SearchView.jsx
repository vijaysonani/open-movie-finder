import React, { Component } from 'react';
import { Input, Button, Segment } from 'semantic-ui-react';
// import MoviesListWebAPIUtils from '../../moviesList/MoviesListWebAPIUtils'

class SearchView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: null,
    };
    this.handleRef = this.handleRef.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(this.inputRef);
    console.log('Search button clicked');
    // MoviesListWebAPIUtils.getMoviesLists('');
  }

  handleRef(c) {
    this.setState({ temp: c });
  }

  render() {
    return (
      <Segment vertical textAlign="center">
        <Input ref={this.handleRef} placeholder="Find movies by title..." />
        &nbsp;
        <Button content="Search" onClick={this.onClick} />
      </Segment>
    );
  }
}

export default SearchView;
