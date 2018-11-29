import React, { Component } from 'react';
// import Counter from './Counter'
import Chat from './Chat/Chat'
import Auth from './Auth/Auth'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}

        {/* <Chat></Chat> */}
        <Auth>
          <Chat />
        </Auth>
      </div>
    )
  }
}

export default App;
