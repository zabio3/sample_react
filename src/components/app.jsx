import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  render() {
    return (
      {// トップレベルのElementは一つでなければならない
       }
      <div>
        <Greeting name='Bob'/>
        <Greeting name='John'/>
      </div>
    );
  }
}

export default App;
