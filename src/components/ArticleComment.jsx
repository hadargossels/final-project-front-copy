import React, { Component } from 'react';

class ArticleComment extends Component {
    render() {
        return (
            <div className="border my-3 px-2 py-1" style={{backgroundColor: "white"}}>
                <p><b>Name:</b> {this.props.comment.name} <b>Date: </b>{this.props.comment.date}</p>
                <p><b>Comment:</b><br></br>{this.props.comment.comment} </p>
            </div>
        );
    }
}

export default ArticleComment;