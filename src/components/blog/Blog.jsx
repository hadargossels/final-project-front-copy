import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Blog.css'
import axios from 'axios'
     

export class Blog extends Component {
    constructor(props){
        super(props)
        this.state = {
            blog: []
        }
    }

    componentDidMount () {
        this.getBlog();
     }


     
     async getBlog() {
     try {
        const response = await axios.get('http://localhost:3000/blog');
        this.setState({blog: response.data}, () => {});
     } catch (error) {
        console.error(error);
     }
     }

    render() {
        return (
            <div className='blog'>
                <h1>BLOG</h1>
                {this.state.blog.map((v) => <div className='post' key={v.id}  postid={v.id}>
                    <h3>{v.title}</h3>
                    <p>{v.content}</p>
                    <span>{v.date}</span> <span>{v.comments} comments</span>
                    <NavLink exact to ={"/Post/"+v.id} style={{color: "#b48484"}}>Go to post</NavLink>
                </div>)}
            </div>
        )
    }
}

export default Blog
