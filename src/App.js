import React, { Component } from 'react';
import './App.css';

import AutoColor from "./components/auto-color";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <AutoColor backgroundColor={'#809070'}>
      //   <p>here is the para</p>
      // </AutoColor>
      <AutoColor threshold={128} backgroundColor={'rgb(223, 252, 178)'}>
        <p>here is the para</p>
      </AutoColor>
    );
  }
}

export default App;
