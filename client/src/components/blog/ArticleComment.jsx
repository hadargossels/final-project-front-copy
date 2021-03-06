import React from 'react';

export default function articleComment(props) {
    return (
        <div className="border my-3 px-2 py-1" style={{backgroundColor: "white"}}>
            <p><b>Name:</b> {props.comment.name} <b>Date: </b>{props.comment.date}</p>
            <p><b>Comment:</b><br></br>{props.comment.comment} </p>
        </div>
    );
}
