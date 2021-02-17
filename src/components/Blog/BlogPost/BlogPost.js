import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import postList from "../postList.json"
import userList from '../../Login/Users.json'

let post

export default class BlogPost extends Component {
    constructor(){
        super()
        this.currentUser = localStorage.getItem("login")
        this.state = {currentComment:""}
    }

    updateComment(e){
        this.setState({currentComment:e.target.value})
    }

    addComment(e){
        e.preventDefault()
        if (!this.state.currentComment){ return}
        let currentArr = JSON.parse(localStorage.getItem(`comments${post.id}`))
        let now = new Date()
        let nowDate = now.toDateString()
        let nowTime = now.getHours() + ":" + now.getMinutes() +":"+ now.getSeconds() 
        let commentObj = {id: 0, date:(nowDate + " at " + nowTime), user:this.currentUser, comment:this.state.currentComment};

        if (!currentArr){
            localStorage.setItem(`comments${post.id}`,JSON.stringify([commentObj]))
        }
        else{
            commentObj.id = currentArr.length
            currentArr.push(commentObj);
            localStorage.setItem(`comments${post.id}`,JSON.stringify(currentArr))
        }
        this.setState({currentComment:""})
    }

    render() {
        post = postList.posts.find(({title})=>title===(this.props.match.params.title))
        if (this.currentUser){
            for (let user of userList.users){
                if (user.id === this.currentUser)
                    this.currentUser=user.username;
                    break;
            }
        }
        return (
            <div className="py-5 container">
                <div className="row justify-content-center border border-warning" style={{backgroundColor:"#FFF5EE"}}>
                    <div className="col-10 my-4">
                        <div className="rounded my-2" style={{backgroundImage:`url(${post.img})`, height:"25vw", backgroundPosition:"center", backgroundSize:"100%",backgroundRepeat:"no-repeat"}}></div>
                        <h1 className="text-danger">{post.title}</h1>
                        
                        <div className="d-flex">
                            <span className="p-2"><i className="far fa-calendar-alt"> {post.date}</i></span>
                            <span className="p-2"><i className="fas fa-comment-alt"></i> {this.comments? this.comments : "0"}</span>
                        </div>
                        <div className="my-3" style={{whiteSpace:"pre-line"}}>{(post.blogtext)}</div>
                        <img src={post.bottomContent} alt="" className={`${post.bottomType === "picture"? "" : "d-none"} mx-auto d-block img-fluid img-thumbnail`}/>
                        <br/>
                        <Link to="/blog"><button className="btn btn-danger float-end">Back to Our Blog</button></Link>
                    </div>
                </div>
                {/* comments section */}
                <div className="my-2 row justify-content-center border border-warning py-3" style={{backgroundColor:"#FFF5EE"}}>
                    <h4 className="text-danger">Comments</h4>
                    
                   {JSON.parse(localStorage.getItem(`comments${post.id}`)) ? JSON.parse(localStorage.getItem(`comments${post.id}`)).map((element) => (
                        <div key={element.id} className="my-2 col-10 border px-0">
                        <div className="px-2 text-light" style={{backgroundColor:"#D2691E"}}>
                            <span>{element.user}</span>
                            <span className="float-end">{element.date}</span>
                        </div>
                        <div className="px-2" style={{backgroundColor:"#FFFFFF"}}>
                            <p className="text-dark my-0 py-2">{element.comment}</p>
                        </div>
                    </div>
                    )):""}
                    
                    <h6 className="pt-2 text-danger">{this.currentUser ? "" : <span><Link to="/login">Log in</Link> to </span>}Add a Comment</h6>
                    <form className={this.currentUser? "col-10" : "d-none"} onSubmit={(e)=>this.addComment(e)}>
                        <p>Name: {this.currentUser}</p>
                        <textarea onChange={(e)=>this.updateComment(e)} value={this.state.currentComment} type="text" rows="3" maxLength="400" className="form-control" placeholder="Enter your comment here (400 characters max)"></textarea>
                        <button className="btn btn-primary float-end my-2">Post Comment</button>
                    </form>

                </div>
            </div>
        )
    }
}
