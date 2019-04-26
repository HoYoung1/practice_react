import React, { Component } from 'react';
import './App.css';
import Subject from "./components/Subject";
import Content from "./components/Content";
import TOC from "./components/TOC";





class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC desc="html"></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>
    );
  }
}

export default App;
