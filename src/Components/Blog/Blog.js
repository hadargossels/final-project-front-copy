import React, { Component } from 'react';
import './Blog.css';
// import blogposts from '../../blogposts.json'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Blog extends Component {
    constructor(){
        super();
        this.state = {
            // posts: blogposts.posts,
            posts: null,
        }
    }

    componentDidMount = () => {
        let self = this

        axios.get('http://localhost:3000/posts')
        .then(function(response) {
            self.setState({
                posts: response.data,
            })
        })
        .catch( function(error) {
            console.log(error)
        })
    }

    render () {
        return(    
            <main className="Blog">
                <div className="blogHeader text-center text-7xl text-yellow-600 my-10">
                    <h1>News, Updates, Events and More!</h1>
                </div>
                <div className="blogBody">
                    {this.state.posts && this.state.posts.map(post => (
                        <div key={post._id} className="blogpost w-1/2 mx-auto py-1 text-xl mb-5">
                            <div className="datePart w-32 bg-yellow-800 text-yellow-100 rounded-t-lg text-center py-1 shadow-inner">
                                {post.date}
                            </div>
                            <div className="titlePart w-full bg-yellow-50 pl-3 py-4 text-4xl text-yellow-700 rounded-tr-lg">
                                {post.title}
                            </div>
                            <Link to={"/blogpost/" + post.postName}>
                                <button className="readPart w-full bg-yellow-200 text-left pl-3 py-2 text-2xl">
                                    Read More <i className="fas fa-arrow-right" />
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        )
    }
}

export default Blog;