import React from 'react';

export default function articleComment(props) {
    return (
        <div className="border my-3 px-2 py-1" style={{backgroundColor: "white"}}>
            <p><b>Name:</b> {props.comment.firstName + ' ' + props.comment.lastName} <b>Date: </b>{props.comment.date}</p>
            <p><b>Title:</b><br></br>{props.comment.title} </p>
            <p><b>Comment:</b><br></br>{props.comment.body} </p>
        </div>
    );
}
