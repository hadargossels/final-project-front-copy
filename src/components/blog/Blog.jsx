import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Blog.css'

const blog = [
    {id: 1, title: "Post Titel1", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero, nobis minima perspiciatis eius, quaerat voluptas, unde temporibus eveniet accusamus culpa quae dolorum nemo. Modi asperiores blanditiis recusandae sed consequatur.", date: "01/01/2021", comments: 100},
    {id: 2, title: "Post Titel2", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero, nobis minima perspiciatis eius, quaerat voluptas, unde temporibus eveniet accusamus culpa quae dolorum nemo. Modi asperiores blanditiis recusandae sed consequatur.", date: "02/01/2021", comments: 110},
    {id: 3, title: "Post Titel3", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero, nobis minima perspiciatis eius, quaerat voluptas, unde temporibus eveniet accusamus culpa quae dolorum nemo. Modi asperiores blanditiis recusandae sed consequatur.", date: "03/01/2021", comments: 120},
    {id: 4, title: "Post Titel4", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero, nobis minima perspiciatis eius, quaerat voluptas, unde temporibus eveniet accusamus culpa quae dolorum nemo. Modi asperiores blanditiis recusandae sed consequatur.", date: "04/01/2021", comments: 130},
    {id: 5, title: "Post Titel5", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero, nobis minima perspiciatis eius, quaerat voluptas, unde temporibus eveniet accusamus culpa quae dolorum nemo. Modi asperiores blanditiis recusandae sed consequatur.", date: "05/01/2021", comments: 140},
]
     

export class Blog extends Component {
    render() {
        return (
            <div className='blog'>
                <h1>BLOG</h1>
                {blog.map((v) => <div className='post' key={v.id}  postId={v.id}>
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
