import React, { Component } from 'react'
import './Post.css'
import axios from 'axios'

export class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            i: 0,
            blog: [],
            comments: [],
            count: 0
        }
        this.findIndex = this.findIndex.bind(this);
        this.commentCount = this.commentCount.bind(this);
        this.findIndex();
        this.commentCount();
    }

    componentDidMount () {
        this.getBlog();
        this.getComments();
     }


     
     async getBlog() {
     try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/blog/`);
        this.setState({blog: response.data}, () => {
           this.findIndex()
        });        
     } catch (error) {
        console.error(error);
     }
     }

     async getComments() {
        try {
           const response = await axios.get(`${process.env.REACT_APP_URL}/comment/`);
           this.setState({comments: response.data}, () => {this.commentCount()});        
        } catch (error) {
           console.error(error);
        }
        }

    findIndex () {
        let i = 0;
        for (const element of this.state.blog) {
           if (this.props.match.params.postid == element.id)
           {i = element.id - 1; }
        }
        setTimeout(()=>{this.setState({i})
        this.commentCount();},5) 
     }

     comment(e) {
         e.preventDefault();
         let comments = [...this.state.comments]
         let postId = parseInt(this.props.match.params.postid)
         let id = [...this.state.comments].length + 1
         let name = e.target.childNodes[4].value
         let date = new Date();
         let dd = String(date.getDate()).padStart(2, '0');
         let mm = String(date.getMonth() + 1).padStart(2, '0');
         let yyyy = date.getFullYear();
         date = dd + '/' + mm + '/' + yyyy;
         let comment = e.target.childNodes[8].value
         let commentObj = {postId:postId, id:id, name:name, date:date, comment:comment}
         comments.push(commentObj)
         axios.post(`${process.env.REACT_APP_URL}/comment/`, {
             postId:postId,
             id:id,
             name:name,
             date:date,
             comment:comment})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
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
        return (this.state.blog[this.state.i]) ? (
            <div className="post1">
                <div className='postSec'>
                    <h1>{this.state.blog[this.state.i].title}</h1>
                    <span>{this.state.blog[this.state.i].name}</span><br/>
                    <span>{this.state.blog[this.state.i].date}</span><br/>
                    <p>{this.state.blog[this.state.i].content}</p>
                    <img src={this.state.blog[this.state.i].src} alt="postImg" width="250px"/>
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
        ) : (<div>Loading...</div>)
    }
}

export default Post
