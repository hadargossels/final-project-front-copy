import React, { Component } from 'react'
import BlogElement from './BlogElement/BlogElement'
import postList from "./postList.json"

export default class Blog extends Component {
    render() {
        let sorted = postList.posts.sort(function(a,b){return b.id - a.id})
        return (
            <div className="py-5 text-center">
                <h1 className="text-danger">Our Blog</h1>
              
               <div className="container col-11">
                   <div className="row justify-content-center">
                        {sorted.map((element, key)=>{
                            return <BlogElement id={element.id} key={key}/>
                        })}
                </div>
                </div>
            </div>
        )
    }
}
