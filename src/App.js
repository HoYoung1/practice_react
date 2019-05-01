import React, { Component } from 'react';
import './App.css';
import Subject from "./components/Subject";
import Content from "./components/Content";
import TOC from "./components/TOC";





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'welcome',
      welcome: { title: 'WEB', sub: 'World wide Web!' },
      subject: {
        title: "WEB",
        sub: "world wide web!"
      },
      contents: [
        {
          id: 1, title: "HTML", desc: "html is for information"
        },
        {
          id: 2, title: "CSS", desc: "css is for design"
        },
        {
          id: 3, title: "Javascript", desc: "javascript is for interactivte"
        },
        {
          id: 4, title: "React", desc: "react is for reuse"
        }
      ]

    }
  }
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.sub;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    console.log("App render");
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
