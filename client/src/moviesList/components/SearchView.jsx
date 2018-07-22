import React, { Component } from 'react';
import { Input, Button, Segment } from 'semantic-ui-react';
import MoviesListWebAPIUtils from '../../moviesList/MoviesListWebAPIUtils';

class SearchView extends Component {
  constructor(props) {
    super(props);

    this.handleRef = this.handleRef.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    MoviesListWebAPIUtils.getMoviesLists(this.inputNode.inputRef.value);
  }

  handleRef(node) {
    this.inputNode = node;
  }

  render() {
    return (
      <Segment vertical textAlign="center">
        <Input
          ref={(node) => { this.handleRef(node); }}
          placeholder="Find movies by title..."
        />
        &nbsp;
        <Button content="Search" onClick={this.onClick} />
      </Segment>
    );
  }
}

export default SearchView;
