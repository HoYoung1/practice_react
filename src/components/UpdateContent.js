import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        console.log("UpdateContent render");
        console.log("_data : ", this.props.data);
        return (
            <article>
                <h1>update</h1>
                <form action="/update_contents" onSubmit={function (e) {
                    e.preventDefault();
                    // alert(e.target.title.value+" "+e.target.desc.value);
                    this.props.onSubmit(this.props.data.id, this.state.title, this.state.desc);
                }.bind(this)}>
                    <p>
                        <input
                            type="text" 
                            name="title" 
                            placeholder="title" 
                            value={this.state.title} 
                            onChange={this.inputFormHandler}></input>
                    </p>
                    <p>
                        <textarea 
                        type="textarea" 
                        name="desc" 
                        placeholder="description" 
                        value={this.state.desc} 
                        onChange={this.inputFormHandler}></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}
export default UpdateContent;