import React, { Component } from 'react'
import axios from 'axios'
import BlogElement from './BlogElement/BlogElement'

export default class Blog extends Component {
    constructor(){
        super()
        this.state = {posts:[]}
    }

    componentDidMount(){
        axios.get("http://localhost:3000/posts").then( (response) =>{
            this.setState({posts : response.data})
        })
    }

    render() {
        let sorted2 = this.state.posts.sort(function(a,b){return b.id - a.id})
        return (
            <div className="py-5 text-center">
                <h1 className="text-danger">Our Blog</h1>
              {!sorted2? "Loading...": 
                    <div className="container col-11">
                        <div className="row justify-content-center">
                            {sorted2.map((element)=>{
                                return <BlogElement post={element} key={element.id}/>
                            })}
                        </div>
                    </div>
              }
            </div>
        )
    }
}
