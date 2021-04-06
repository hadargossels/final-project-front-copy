import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './BlogElement.css'
import Spinner from '../Spinner/Spinner'

export default function BlogElement(props) {
  const post = props.post
  const [commentCount , setCommentCount] = useState(null)
  let date = new Date(post.date)
  post.date= date.getFullYear()+"/"+(Number(date.getMonth())+1)+"/"+date.getDate()
  
  useEffect(() => {

    axios.get(`${process.env.REACT_APP_SERVER}/comments?postId=${post.id}`, {headers: {Authorization: `bearer ${process.env.REACT_APP_PUBLIC_HEADER}`}})
    .then( response =>{
          setCommentCount(response.data.length)
    })

  }, [post.id])
  return (
    Number.isInteger(commentCount)?
      <div className="col-lg-3 col-md-5 px-0 text-start border border-2 m-2 bordered border-secondary rounded">
            <Link style={{ textDecoration: "none" }} to={`/blogpost/${post.title}`}>
                <img 
                src={process.env.REACT_APP_SERVER +post.images.filter(obj=>!obj.includes("bottom"))[0]}
                 alt="" className="rounded img-fluid" />
                <div className="px-2">
                    <div className="py-3 text-secondary fw-bold">
                        <span className=" border-bottom  border-2 border-danger">{post.date}</span>
                        <span className="float-end"><i className="fas fa-comment-alt"></i> {commentCount}</span>
                    </div>
                    <h3 className="catalog-title">
                        {post.title.length < 45 ? post.title : post.title.slice(0, 46) + "..."}
                    </h3>
                    <span className="text-secondary">{post.blogtext.slice(0, 120)}...</span>
                    <h6 className="fw-bold text-danger">Read more</h6>
                </div>
            </Link>
      </div>
      :
      <Spinner/>
  );
}

