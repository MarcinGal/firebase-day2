import React, { Component } from 'react';
import Counter from './Counter'
import Chat from './Chat/Chat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>

        <Chat></Chat>
      </div>
    )
  }
}

export default App;
