import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../../components/Spinner/Spinner'

export default function BlogPost(props) {
    const [currentComment, setCurrentComment] = useState("")
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:5000/posts?title=${props.match.params.title}`).then( (response) =>{
            setPost(response.data[0])
            axios.get(`http://localhost:5000/comments?postId=${response.data[0].id}`).then( (response) =>{
                setComments(response.data)
            });
        });
    }, [props.match.params.title])

    const updateComment = (e) =>{
        setCurrentComment(e.target.value)
    }

    const addComment = (e) =>{
        e.preventDefault()
        if (!currentComment){ return}
        axios.post("http://localhost:5000/comments", {postId:post.id, userId:'60636e12545fd24c70ff8daa', postDate:new Date(), comment:currentComment}).then(()=>{
            axios.get(`http://localhost:5000/comments?postId=${post.id}`).then( (response) =>{
                setComments(response.data)
            });
            setCurrentComment("")
        })
    }

    if (post){
        let date = new Date(post.date)
        post.date= date.getFullYear()+"/"+(Number(date.getMonth())+1)+"/"+date.getDate()
    }
    if (comments){
        for (let comment of comments){
            comment.date = new Date(comment.date)
        }
    }
    const currentUser = localStorage.getItem("login")
    return (
        <div className="py-5 container">
            {!post? <Spinner/>: 
            <div>
                <div className="row justify-content-center border border-warning" style={{backgroundColor:"#FFF5EE"}}>
                    <div className="col-10 my-4">
                        <div className="rounded my-2" style={{backgroundImage:`url(${post.img})`, height:"25vw", backgroundPosition:"center", backgroundSize:"100%",backgroundRepeat:"no-repeat"}}></div>
                        <h1 className="text-danger">{post.title}</h1>
                        <div className="d-flex">
                            <span className="p-2"><i className="far fa-calendar-alt"> {post.date}</i></span>
                            <span className="p-2"><i className="fas fa-comment-alt"></i> {comments? comments.length : "0"}</span>
                        </div>
                        <div className="my-3" style={{whiteSpace:"pre-line"}}>{(post.blogtext)}</div>
                        <img src={post.bottomContent} alt="" className={`${post.bottomType === "picture"? "" : "d-none"} mx-auto d-block img-fluid img-thumbnail`}/>
                        <br/>
                        <Link to="/blog"><button className="btn btn-danger float-end">Back to Our Blog</button></Link>
                    </div>
                    <div className="my-2 row justify-content-center border border-warning py-3" style={{backgroundColor:"#FFF5EE"}}>
                        <h4 className="text-danger">Comments</h4>

                        {comments && comments.map(comment => 
                                <div key={comment.id} className="my-2 col-10 border px-0">
                                <div className="px-2 text-light" style={{backgroundColor:"#D2691E"}}>
                                    <span>{comment.userId.name+" "+comment.userId.lastname}</span>
                                    <span className="float-end">
                                        {comment.date.toDateString()+" "+
                                        (comment.date.getHours() < 10 ? "0"+comment.date.getHours() : comment.date.getHours()) + ":" +
                                        (comment.date.getMinutes() < 10 ? "0"+comment.date.getMinutes() : comment.date.getMinutes()) +":"+
                                        (comment.date.getSeconds() < 10 ? "0"+comment.date.getSeconds() : comment.date.getSeconds())
                                         }
                                    </span>
                                </div>
                                <div className="px-2" style={{backgroundColor:"#FFFFFF"}}>
                                    <p className="text-dark my-0 py-2">{comment.comment}</p>
                                </div>
                            </div>
                        )}
                        <h6 className="pt-2 text-danger">{currentUser ? "" : <span><Link to="/login">Log in</Link> to </span>}Add a Comment</h6>
                        <form className={currentUser? "col-10" : "d-none"}
                        onSubmit={(e)=>addComment(e)}
                        >
                            <p>Name: {currentUser}</p>
                            <textarea 
                            onChange={(e)=>updateComment(e)}
                             value={currentComment}
                             type="text" rows="3" maxLength="400" className="form-control" placeholder="Enter your comment here (400 characters max)"></textarea>
                            <button className="btn btn-primary float-end my-2">Post Comment</button>
                        </form>
                    </div>
                </div>
            </div>
          }
        </div>
    )
}

