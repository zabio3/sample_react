import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'place': 'Tokyo tower',
    };
  }

  handlePlaceChange(place) {
    this.setState({ place });
  }

  handleSubmit(e) {
    e.preventDefault(); // 再リロードを停止してくれる
    this.props.onSubmit(this.state.place);
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.place}
          onChange={e => this.handlePlaceChange(e.target.value)}
        />
        <input type="submit" value="検索" />
      </form>
    );
  }
}

export default SearchForm;
