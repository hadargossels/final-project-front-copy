import React, { Component } from 'react'
import axios from 'axios'
import BlogElement from '../../components/Blog/BlogElement'
import {newestDate} from '../../functions/compareFuncs'

export default class Blog extends Component {
    constructor(){
        super()
        this.state = {posts:[]};
    }

    componentDidMount(){
        axios.get(`${process.env.REACT_APP_SERVER}/public/posts`, {headers: {Authorization: `bearer ${process.env.REACT_APP_PUBLIC_HEADER}`}}).then( (response) =>{
            this.setState({posts : response.data})
        })
    }

    render() {
        let sorted = this.state.posts.sort(newestDate)
        return (
            <div className="py-5 text-center">
                <h1 className="text-danger">Our Blog</h1>
              {!sorted? "Loading...": 
                    <div className="container col-11">
                        <div className="row justify-content-center">
                            {sorted.map((element)=>
                                <BlogElement post={element} key={element.id}/>
                            )}
                        </div>
                    </div>
              }
            </div>
        )
    }
}
