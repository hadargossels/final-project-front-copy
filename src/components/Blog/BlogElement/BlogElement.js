import React, { Component } from "react";
import postList from "../postList.json";
import { Link } from "react-router-dom";
import './BlogElement.css'

export default class BlogElement extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: localStorage.getItem("comments") };
  }
  render() {
    const post = postList.posts.find(({ id }) => id === this.props.id);
    return (
      <div className="col-lg-3 col-md-5 px-0 text-start border border-2 m-2 bordered border-secondary rounded">
          <div className="">
            <Link style={{ textDecoration: "none" }} to={`/blogpost/${post.title}`}>
                <img src={post.img} alt="" className="rounded img-fluid" />
                <div className="px-2">
                    <div className="py-3 text-secondary fw-bold">
                        <span className=" border-bottom  border-2 border-danger">{post.date}</span>
                        <span className="float-end"><i className="fas fa-comment-alt"></i> {this.state.comments? this.state.comments : "0"}</span>
                    </div>
                    <h3 className="catalog-title">
                        {post.title.length < 45 ? post.title : post.title.slice(0, 46) + "..."}
                    </h3>
                    <span className="text-secondary">{post.blogtext.slice(0, 120)}...</span>
                    <h6 className="fw-bold text-danger">Read more</h6>
                </div>
            </Link>
          </div>
      </div>
    );
  }
}
