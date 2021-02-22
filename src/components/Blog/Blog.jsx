import React, { } from 'react'
import Card from './Card'
import axios from 'axios'
import { Component } from 'react';

export default class Blog extends Component{
    constructor(){
        super()
        this.state={
            blogs:[]
        }
    }
    componentDidMount(){

        let that=this

        axios.get('http://localhost:3000/blogs')
        .then(function (response) {
            
          that.setState({blogs:response.data})
          
        })
        .catch(function (error) {
          console.log(error);
        })
    }
     
       render(){
        return (
            <div>
                <br/><h1 className="text-center"><span style={{color:"orange"}}>/</span> <b>Latest News</b><span style={{color:"orange"}}>/</span></h1>
                <div className="container d-flex flex-wrap">
                { this.state.blogs.map((obj)=>
                    <Card key={obj.id} id={obj.id} title={obj.Title} image={obj.Image} subject={obj.Subject} />
                )
                }
                
            </div>
            </div>
        )
    }

}