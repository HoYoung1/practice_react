import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        console.log("CreateContent render");
        return (
            <article>
                <h1>create</h1>
                <form action="/create_contents" onSubmit={function(e){
                    e.preventDefault();
                    // alert(e.target.title.value+" "+e.target.desc.value);
                    this.props.onSubmit(e.target.title.value,e.target.desc.value);
                }.bind(this)}>
                    <p>
                        <input type="text" name="title" placeholder="title"></input>
                    </p>
                    <p>
                        <textarea type="textarea" name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}
export default CreateContent;