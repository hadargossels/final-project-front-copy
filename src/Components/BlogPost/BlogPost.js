import React, { Component } from 'react';
import './BlogPost.css';
// import blogposts from '../../blogposts.json'
import axios from 'axios';

class BlogPost extends Component {
    constructor(){
        super();
        this.state = {
            post: null,
            comments: null,
            content: null,
            title: null,
            date: null,
            postImage: null,
            video: null,
        }
    }

    componentDidMount = () => {
        let MyPost = this.props.match.params.postName;

        let self = this

        axios.get('http://localhost:3000/posts')
        .then(function(response) {
            let myPosts = response.data.filter(post => post.postName === MyPost)
            let mainPost = myPosts[0]
            let postComments = mainPost.comments
            self.setState({
                post: mainPost,
                comments: postComments,
                content: mainPost.content,
                title: mainPost.title,
                date: mainPost.date,
                postImage: mainPost.postImage,
                video: mainPost.video,
            })
        })
        .catch( function(error) {
            console.log(error)
        })

        // let myPosts = blogposts.posts.filter(post => post.postName === MyPost)
        // let mainPost = myPosts[0]
        // let postComments = mainPost.comments
        // this.setState({
        //     post: mainPost,
        //     comments: postComments,
        //     content: mainPost.content,
        //     title: mainPost.title,
        //     date: mainPost.date,
        //     postImage: mainPost.postImage,
        //     video: mainPost.video,
        // })
    }

    render () {
        let commentsNum;
        if (this.state.comments) {
            commentsNum = this.state.comments.length
        } else {
            commentsNum = 0;
        }

        return(    
            <main className="BlogPosts">
                <div className="thePost w-1/2 bg-yellow-100 mx-auto my-10 pb-5 rounded-t-lg">
                    <div className="PostBody text-2xl pb-2">
                        <div className="theHeader py-4 bg-yellow-900 px-4 rounded-t-lg">
                            <h1 className="text-yellow-50 text-5xl">{this.state.title}</h1>
                            <p className="text-yellow-200">{this.state.date}</p>
                        </div>
                        <div className="theContent pt-4 px-4 mb-3">
                            {this.state.postImage && 
                                <div>
                                    <img src={this.state.postImage} className="float-left mr-4 my-3" alt="postImage"/>
                                </div>
                            }
                            {this.state.content && 
                                <div>
                                    {this.state.content}
                                </div>
                            }
                        </div>
                        {this.state.video && 
                            <div>
                                <iframe 
                                    width="560" 
                                    height="315" 
                                    src={this.state.video} 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscree
                                    className="my-10 mx-auto"
                                    title="postVideo"
                                ></iframe>
                            </div>
                        }
                    </div>
                    <hr className="my-3"/>
                    <div className="Comments px-4">
                        <div className="addComment">
                            <h1 className="text-3xl text-yellow-800 pt-5">Add a comment!</h1>
                            <p className="text-xl">*for registered users only</p>
                            <textarea disabled className="bg-gray-300 opacity-50 border border-black" rows="4" cols="40" style={{resize: "none"}}/>
                            <br />
                            <button className="text-yellow-100 bg-yellow-600 rounded text-xl py-1 px-2 mb-5 opacity-75 cursor-default" disabled>Add Comment</button>
                        </div>
                        <hr/>
                        <div className="writtenComments">
                            <h1 className="text-4xl text-yellow-700">Comments ({commentsNum})</h1>
                            {this.state.comments && this.state.comments.map(comment => (
                                <div className="bg-yellow-700 my-5 p-2 text-2xl rounded-tl-lg rounded-tr-lg rounded-br-lg">
                                    <div className="w-1/2">
                                        <p className="float-right mr-48">{comment.date}</p>
                                        <p>
                                            <img src={comment.userIcon} className="float-left mr-2" alt={comment.user}/>
                                            <span>{comment.user}</span>
                                        </p>
                                    </div>
                                    <p>{comment.commentBody}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default BlogPost;