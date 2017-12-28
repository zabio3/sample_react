import React, { Component } from 'react';

import SearchForm from './SearchForm';

class App extends Component {
   // 親コンポーネントの初期の状態定義
  constructor(props) {
    super(props);
    this.state = {
      name : 'Bob',
    };
  }

  handlePlaceSubmit(place) {
    console.log(place);
  }


// トップレベルのElementは一つでなければならない
  render() {
    return (
      <div>
        <h1>緯度/軽度 検索</h1>
        <SearchForm onSubmit={ place => this.handlePlaceSubmit(place)}/>
      </div>
    );
  }
}

export default App;
