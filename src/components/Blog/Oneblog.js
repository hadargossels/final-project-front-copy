import React, { Component } from "react";
import Comment from "./Comment";

export default class Oneblog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfBlog: this.props.match.params.nameblog,
      myBlog: "",
      comments: JSON.parse(localStorage.getItem("comments") || "[]"),
      blogs: [],
    };
  }
  componentDidMount() {
    let comments = JSON.parse(localStorage.getItem("comments") || "[]");
    localStorage.getItem("numOfComments" || 0);
    this.setState({ comments: comments });
    window.scrollTo(0, 0);
    this.getBlog();
  }

  saveComment(e) {
    let today = new Date();

    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let hh = today.getHours();
    let m = today.getMinutes();
    if (m < 10) m = "0" + m;

    let hour = hh + ":" + m;

    today = dd + "/" + mm + "/" + yyyy + " " + hour;

    e.preventDefault();
    let commentDetails = document.querySelectorAll(".inputComment");
    let oneComment = {
      post: this.state.nameOfBlog,
      name: "",
      email: "",
      comment: "",
      time: today,
    };
    for (let i = 0; i < commentDetails.length; i++) {
      let item = commentDetails[i];
      switch (item.name) {
        case "name":
          oneComment.name = item.value;
          item.value = "";
          break;
        case "email":
          oneComment.email = item.value;
          item.value = "";
          break;
        case "comment":
          oneComment.comment = item.value;
          item.value = "";
          break;
        default:
          break;
      }
    }
    let num = this.state.counter;
    oneComment.number = num;
    this.setState({ counter: num++ });
    let arr = [...this.state.comments];
    arr.unshift(oneComment);

    this.setState({ comments: arr });
    localStorage.setItem("comments", JSON.stringify(arr));
  }
  getBlog() {
    let myBlog = this.props.datablogs.filter(
      (item) => item.name === this.state.nameOfBlog
    );

    this.setState({ myBlog: myBlog[0] });
  }
  currentPostComments() {
    let comments = this.state.comments;
    let myComments = comments.filter((a) => a.post === this.state.nameOfBlog);

    return myComments;
  }
  updateComments() {
    let myComments = this.currentPostComments();
    return myComments.map((item, key) => (
      <Comment
        name={item.name}
        email={item.email}
        comment={item.comment}
        key={key}
        time={item.time}
      />
    ));
  }
  render() {
    let myComments = this.currentPostComments();
    let len = myComments.length;

    return (
      <div style={{ margin: "0 auto" }}>
        <div style={{ margin: "2rem 200px", fontFamily: "cursive" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "40px",
              minWidth: "300px",
            }}
          >
            {this.state.myBlog.name}
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              alt="myBlog"
              src={this.state.myBlog.src}
              style={{ width: "50%", minWidth: "300px" }}
            />
          </div>
          <div
            style={{
              margin: "2rem 100px",
              fontSize: "20px",
              fontWeight: "bold",
              minWidth: "300px",
            }}
          >
            {this.state.myBlog.title}
          </div>
          <div
            style={{
              margin: "2rem 100px",
              fontSize: "20px",
              minWidth: "400px",
            }}
          >
            {this.state.myBlog.text}
          </div>
        </div>
        <div style={{ margin: "2rem 300px", fontFamily: "cursive" }}>
          <div style={{ margin: "1rem 0", fontSize: "30px" }}>Comments</div>
          <p style={{ minWidth: "300px" }}>
            Leave a comment below: Your comments make my day. Thank you! If you
            have a question, please skim the comments section—you might find an
            immediate answer there. If you made the recipe, please choose a star
            rating, too.
          </p>
          <form>
            <label>Comment</label>
            <br />
            <textarea
              className="inputComment"
              cols="70"
              rows="6"
              name="comment"
              maxLength="100"
              style={{ resize: "none" }}
            />
            <br />
            <label style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              Name *{" "}
            </label>
            &nbsp;
            <input className="inputComment" name="name" type="text" />
            <br />
            <label>Email * </label>&nbsp;
            <input className="inputComment" name="email" type="email" />
            <br />
            <div style={{ display: "flex", margin: "1rem" }}></div>
            <button
              onClick={(e) => this.saveComment(e)}
              className="btn btn-danger"
            >
              add comment
            </button>
          </form>

          <div style={{ marginTop: "2rem" }}>
            <h4>Comments</h4>
            <span style={{ fontSize: "12px", color: "grey" }}>
              {len}&nbsp; comments
            </span>
            <div
              style={{
                border: "1px solid grey",
                minHeight: "5rem",
                minWidth: "400px",
              }}
            >
              {this.updateComments()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
