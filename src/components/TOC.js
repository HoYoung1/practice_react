import React, { Component } from 'react';

class TOC extends Component {

    render() {
        console.log("TOC render");
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a 
                    href={"/content/" + data[i].id} 
                    // onClick={function(id,e){
                    //     console.log(e)
                    //     e.preventDefault(); 
                    //     // this.props.onChangePage(e.target.dataset.id);
                    //     this.props.onChangePage(data[i].id)
                    //     console.log("data[i].id",data[i].id)
                    // }.bind(this)}
                    data-id={data[i].id}
                    onClick={function(e){
                        console.log(e);
                        e.preventDefault();
                        console.log("data[i].id",data[0].id);
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                    >
                    {data[i].title}
                    </a>
                </li>)
            i = i + 1
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;