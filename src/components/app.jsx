import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
   // 親コンポーネントの初期の状態定義
  constructor(props) {
    super(props);
    this.state = {
      name : 'Bob',
    };
  }

  hendleNameChange(name) {
    // 渡したものと、stateの名前が同じだと省略可能
    // イベントの何を渡すのかに注目してあげる
    this.setState({ name });
  }

// トップレベルのElementは一つでなければならない
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.hendleNameChange(e.target.value)}
        />
        <button onClick={() => this.hendleNameChange('Bob')}>I am Bob</button>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
