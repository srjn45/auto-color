import React, { Component } from 'react';
import './App.css';

import AutoColor from "./components/auto-color";

class App extends Component {

  render() {
    return (
      // <AutoColor backgroundColor={'#809070'}>
      //   <p>here is the para</p>
      // </AutoColor>
      <AutoColor backgroundColor={'rgb(223, 252, 145)'}>
        <p>here is the para</p>
      </AutoColor>
    );
  }
}

export default App;
