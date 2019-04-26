import React, { Component } from 'react';
import './App.css';
import Subject from "./components/Subject";
import Content from "./components/Content";
import TOC from "./components/TOC";





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: {
        title: "WEB",
        sub: "world wide web!"
      },
      contents: [
        {
          id: 1,
          title: "HTML",
          desc: "html is for information"
        },
        {
          id: 2,
          title: "CSS",
          desc: "css is for design"
        },
        {
          id: 3,
          title: "Javascript",
          desc: "javascript is for interactivte"
        },
        {
          id: 4,
          title: "React",
          desc: "react is for reuse"
        }
      ]

    }
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>
    );
  }
}

export default App;
