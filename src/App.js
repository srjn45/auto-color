import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

import { changeColor } from "./action/colorAction";

class App extends Component {

  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.props.changeColor(event.target.value);
  }

  render() {
    return (
      <div style={{ backgroundColor: '#' + this.props.colors.backgroundColor }}>
        <h1 style={{ color: '#' + this.props.colors.color }}>heading</h1>
        <input type="text" value={this.props.colors.backgroundColor} onChange={this.changeHandler} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    colors: state.colorReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeColor: (backgroundColor) => dispatch(changeColor(backgroundColor))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
