import React, { Component } from 'react';
import { Input, Button, Segment } from 'semantic-ui-react';

import MovieAppUtils from '../../utils/MovieAppUtils';
import MoviesListActionCreators from '../../moviesList/MoviesListActionCreators';

class SearchView extends Component {
  constructor(props) {
    super(props);

    this.handleRef = this.handleRef.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    MoviesListActionCreators.clickMovieSearch(this.inputNode.inputRef.value);
  }

  handleRef(node) {
    this.inputNode = node;
  }

  handleKeyPress(event) {
    if (event.which === MovieAppUtils.ENTER_KEY_CODE) {
      this.onClick();
    }
  }

  render() {
    return (
      <Segment vertical textAlign="center">
        <Input
          ref={(node) => { this.handleRef(node); }}
          placeholder="Find movies by title..."
          onKeyPress={this.handleKeyPress}
        />
        &nbsp;
        <Button content="Search" onClick={this.onClick} />
      </Segment>
    );
  }
}

export default SearchView;
