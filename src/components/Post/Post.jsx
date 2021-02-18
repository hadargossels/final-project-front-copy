import React, { Component } from 'react'
import './Post.css'

const blog = [
    {id: 1, title: "Post Titel1", name:"John Doe", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero, nobis minima perspiciatis eius, quaerat voluptas, unde temporibus eveniet accusamus culpa quae dolorum nemo. Modi asperiores blanditiis recusandae sed consequatur.", date: "01/01/2021", comments: 100, src: "/img/notebooks/noteb1.jpg"},
    {id: 2, title: "Post Titel2", name:"John Doe", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero, nobis minima perspiciatis eius, quaerat voluptas, unde temporibus eveniet accusamus culpa quae dolorum nemo. Modi asperiores blanditiis recusandae sed consequatur.", date: "02/01/2021", comments: 110, src: "/img/notebooks/noteb2.jpg"},
    {id: 3, title: "Post Titel3", name:"John Doe", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero, nobis minima perspiciatis eius, quaerat voluptas, unde temporibus eveniet accusamus culpa quae dolorum nemo. Modi asperiores blanditiis recusandae sed consequatur.", date: "03/01/2021", comments: 120, src: "/img/notebooks/noteb3.jpg"},
    {id: 4, title: "Post Titel4", name:"John Doe", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero, nobis minima perspiciatis eius, quaerat voluptas, unde temporibus eveniet accusamus culpa quae dolorum nemo. Modi asperiores blanditiis recusandae sed consequatur.", date: "04/01/2021", comments: 130, src: "/img/notebooks/noteb4.jpg"},
    {id: 5, title: "Post Titel5", name:"John Doe", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero, nobis minima perspiciatis eius, quaerat voluptas, unde temporibus eveniet accusamus culpa quae dolorum nemo. Modi asperiores blanditiis recusandae sed consequatur.", date: "05/01/2021", comments: 140, src: "/img/notebooks/noteb5.jpg"},
]

const comments = [
    {postId: 1, id: 1, name: "john doe", date: "01/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 1, id: 2, name: "john doe", date: "02/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 1, id: 3, name: "john doe", date: "03/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 2, id: 4, name: "john doe", date: "04/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 2, id: 5, name: "john doe", date: "05/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 2, id: 6, name: "john doe", date: "06/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 3, id: 7, name: "john doe", date: "07/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 3, id: 8, name: "john doe", date: "08/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 3, id: 9, name: "john doe", date: "09/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 4, id: 10, name: "john doe", date: "10/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 4, id: 11, name: "john doe", date: "11/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 4, id: 12, name: "john doe", date: "12/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 5, id: 13, name: "john doe", date: "13/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 5, id: 14, name: "john doe", date: "14/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
    {postId: 5, id: 15, name: "john doe", date: "15/01/2021", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero"},
]

export class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            i: 0,
            commentsArr: comments,
            comments: comments,
            count: 0
        }
        this.findIndex = this.findIndex.bind(this);
        this.findIndex();
        this.commentCount = this.commentCount.bind(this);
        this.commentCount();
    }

    findIndex () {
        let i = 0;
        for (const element of blog) {
           if (this.props.match.params.postId == element.id)
           {i = element.id - 1; }
        }
        setTimeout(()=>{this.setState({i:i})},5) 
     }

     comment(e) {
         e.preventDefault();
         let comments = [...this.state.commentsArr]
         let postId = parseInt(this.props.match.params.postId)
         let id = [...this.state.commentsArr].length + 1
         let name = e.target.childNodes[4].value
         let date = new Date();
         let dd = String(date.getDate()).padStart(2, '0');
         let mm = String(date.getMonth() + 1).padStart(2, '0');
         let yyyy = date.getFullYear();
         date = dd + '/' + mm + '/' + yyyy;
         let comment = e.target.childNodes[8].value
         let commentObj = {postId:postId, id:id, name:name, date:date, comment:comment}
         console.log(commentObj);
         comments.push(commentObj)
         e.target.childNodes[4].value = ""
         e.target.childNodes[8].value = ""
         setTimeout(()=>{this.setState({comments});
         this.commentCount()},5) 
     }

     commentCount() {
         let count = 0;
         for (const element of this.state.comments) {
             if (element.postId === (this.state.i + 1)) {
                count++
             }
         }
         setTimeout(()=>{this.setState({count})},5)

     }

    render() {
        return (
            <div className="post1">
                <div className='postSec'>
                    <h1>{blog[this.state.i].title}</h1>
                    <span>{blog[this.state.i].name}</span><br/>
                    <span>{blog[this.state.i].date}</span><br/>
                    <p>{blog[this.state.i].content}</p>
                    <img src={blog[this.state.i].src} alt="postImg" width="250px"/>
                </div>
                <div className='commentSec'>
                    <span>{this.state.count} comments</span>
                    <div>
                    {this.state.comments.map((v)=> v.postId === (this.state.i + 1) ?
                    <div key={v.id} className='singleComm'>
                        <span>{v.name}</span><br/>
                        <span>{v.date}</span>
                        <p>{v.comment}</p>
                    </div>
                     : null)}
                    </div>
                    <h3>Comment: </h3>
                    <form onSubmit={(e)=>this.comment(e)}>
                        <span style={{color: 'red'}}>* required</span><br/>
                        <label label htmlFor="name">Name: *</label><br/>
                        <input type="text" id="name" required/><br/>
                        <label htmlFor="comment">Comment: *</label><br/>
                        <textarea id="comment" name="comment" rows="4" cols="55" required></textarea><br/>
                        <input type="submit" className='commentBtn' value="Submit"/>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Post
