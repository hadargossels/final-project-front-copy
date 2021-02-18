import React, { Component } from 'react';
import './blog.css'

class Blog extends Component{

    constructor(){
        // localStorage.setItem('comments',JSON.stringify([[],[],[],[]]));
        super();
        this.myArticoleHead = ["Why weight training is incredible for your health","Benefits of yoga","Eating Right","Our new bench-press"]
        this.myArticolBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet commodo. Arcu cursus euismod quis viverra. Sit amet mattis vulputate enim nulla. Ultrices sagittis orci a scelerisque. Quis commodo odio aenean sed adipiscing diam. Tempor orci dapibus ultrices in iaculis nunc. Ac ut consequat semper viverra. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Nisl suscipit adipiscing bibendum est ultricies integer. Id velit ut tortor pretium viverra suspendisse potenti. Netus et malesuada fames ac. Ultrices dui sapien eget mi proin sed. Elit sed vulputate mi sit amet. Eros in cursus turpis massa tincidunt. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Dictum at tempor commodo ullamcorper a lacus. Sagittis vitae et leo duis ut diam quam nulla porttitor."
        this.myArticolsBody= [this.myArticolBody,this.myArticolBody+this.myArticolBody,this.myArticolBody+this.myArticolBody.slice(0,223),this.myArticolBody+this.myArticolBody.slice(0,143)]
        this.state={
            index : 0,
            myComments : localStorage.getItem('comments')? JSON.parse(localStorage.getItem('comments')) : [[],[],[],[]]
        }
        this.commentNameRef = React.createRef();
        this.commentTextRef = React.createRef();
    }

    selectArticle(i){
        this.setState({index : i})
    }

    addComment(){
        if(this.commentNameRef.current.value.length && this.commentTextRef.current.value.length){
            const x= new Date();
            let tempComments = [...this.state.myComments]
            tempComments[this.state.index].unshift(
                this.commentTextRef.current.value
            )
            tempComments[this.state.index].unshift(
                this.commentNameRef.current.value +"   "+x.getHours()+":"+x.getMinutes()+ "  "+ x.getDate()+ "-"+(x.getMonth()*1+1)+ "-"+ x.getFullYear()
            )
            this.commentTextRef.current.value="";
            localStorage.setItem('comments',JSON.stringify(tempComments));
            this.setState({myComments : tempComments})
        }
    }

    render(){
        let comments=[];
        for(let i=0; i<this.state.myComments[this.state.index].length; i+=2){
            comments.push(
                <div className="myComments p-2 border border-info">
                    <h6 className="text-danger"><img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="30" height="30"/> {this.state.myComments[this.state.index][i]}</h6>
                    <p>{this.state.myComments[this.state.index][i+1]}</p>
                </div>
            )
        }
        console.log(comments);
       return (
        <div className="">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3 text-center btn" onClick={()=>this.selectArticle(0)}
                style={{
                backgroundImage:"url('/images/stay-fit.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                height: "25vh",
                backgroundPosition:"center" 
                }}
                >
                    <h5 className="pt-3 text-white">Why weight training is incredible for your health</h5>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 text-center btn" onClick={()=>this.selectArticle(1)}
                style={{
                    backgroundImage:"url('/images/contact-bg.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize:"cover",
                    height: "25vh",
                    backgroundPosition:"center" 
                    }}
                >
                    <h5 className="pt-3 text-white">Benefits of yoga</h5>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 text-center btn" onClick={()=>this.selectArticle(2)}
                style={{
                    backgroundImage:"url('/images/eating-r.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize:"cover",
                    height: "25vh",
                    backgroundPosition:"center" 
                    }}
                >
                    <h5 className="pt-3 text-white">Eating Right</h5>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 text-center btn" onClick={()=>this.selectArticle(3)}
                style={{
                    backgroundImage:"url('/images/benchPress.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize:"cover",
                    height: "25vh",
                    backgroundPosition:"center" 
                    }}
                >
                    <h4 className="pt-3 text-dark">Our new bench-press</h4>
                </div>
            </div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-8 text-center">
                        <h2>{this.myArticoleHead[this.state.index]}</h2>
                        <p>{this.myArticolsBody[this.state.index]}</p>
                    </div>
                    <div className="col-sm-0 col-md-1"></div>
                    <div className="col-sm-12 col-md-3">
                        <h4 className="">comments</h4>
                        <input className="w-100" ref={this.commentNameRef} type="text" placeholder="Name"/><br/>
                        <textarea className="w-100" ref={this.commentTextRef}  type="text" placeholder="Your comment" rows="3" width="100%"/><br/>
                        <input className="btn btn-dark mb-2" type="button" value="Add comment" onClick={()=>this.addComment()} /><br/>
                        {comments}
                    </div>
                </div>
            </div>
        </div>
       )
    }






}

export default Blog;