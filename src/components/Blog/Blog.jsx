import React, { Component } from 'react'
import Blogs from '../../blogs.json'
import Card from './Card'

export default class Blog extends Component {

    render() {
        let arrBlog=Blogs
        
        return (
            <div>
                <br/><h1 className="text-center"><span style={{color:"orange"}}>/</span> <b>Latest News</b><span style={{color:"orange"}}>/</span></h1>
                <div className="container d-flex flex-wrap">
                { arrBlog.map((obj)=>
                    <Card key={obj.id} id={obj.id} title={obj.Title} image={obj.Image} subject={obj.Subject} />
                )
                }
                
            </div>
            </div>
        )
    }
}
