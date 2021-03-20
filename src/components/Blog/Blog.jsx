import React, { } from 'react'
import Card from './Card'
import { Component } from 'react'
import {db} from '../../firebase'

export default class Blog extends Component{
    constructor(){
        super()
        this.state={
            blogs:[]
        }
    }
    componentDidMount(){

        db.ref('blogs').on('value', (snapshot)=>{if(snapshot.val()!=null)
            this.setState({
              blogs: snapshot.val()
            })
          })
    }
     
       render(){
        return (
            <div>
                <br/><h1 className="text-center"><span style={{color:"orange"}}>/</span> <b>Latest News</b><span style={{color:"orange"}}>/</span></h1>
                <div className="container d-flex flex-wrap ">
                { this.state.blogs.length>0
                ?this.state.blogs.map((obj)=>
                    <Card key={obj.id} id={obj.id} title={obj.title} image={obj.image} subject={obj.subject} />
                )
                :<h1 className="text-center">No blogs yet</h1>
                }
                
            </div>
            </div>
        )
    }

}