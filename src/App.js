import React, { Component } from 'react';
import './App.css';
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import TOC from "./components/TOC";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'create',
      welcome: { title: 'WEB', sub: 'World wide Web!' },
      subject: {
        title: "WEB",
        sub: "world wide web!"
      },
      selected_id: 0,
      contents: [
        {
          id: 0, title: "HTML", desc: "html is for information"
        },
        {
          id: 1, title: "CSS", desc: "css is for design"
        },
        {
          id: 2, title: "Javascript", desc: "javascript is for interactivte"
        }
      ]

    }
  }

  render() {
    var _title, _desc,_article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.sub;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[this.state.selected_id].title;
      _desc = this.state.contents[this.state.selected_id].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title,_desc){
        console.log(_title,_desc)
      }.bind(this)}></CreateContent>
    }

    console.log("App render");
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function (id) {
            this.setState({ mode: 'welcome', selected_id: Number(id) });
          }.bind(this)}
        >
        </Subject>
        <TOC
          // onChangePage={function (id) {
          //   this.setState({ mode: 'read', selected_id: id })
          // }.bind(this)} 
          onChangePage={function (_id) {
            console.log("id : ", _id)
            this.setState(
              {
                selected_id: Number(_id),
                mode: 'read'
              }
            )
          }.bind(this)}
          data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){
            this.setState({mode:_mode});
        }.bind(this)}></Control>
        {_article}
        
        
      </div>
    );
  }
}

export default App;
