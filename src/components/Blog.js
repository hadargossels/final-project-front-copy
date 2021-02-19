




import React,{Component} from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Title from './Title'
import './blog.css';
import { FORMERR } from "dns";
let likeOfComment;
export default class Blog extends Component{
    
    constructor (props) {
        super(props);
        this.addLike = this.addLike.bind(this);
        this.addComment = this.addComment.bind(this);
        this.cancel = this.cancel.bind(this);
        this.postsTarget = this.postsTarget.bind(this);
        this.state = {
            posts: [
            [{postsAndCommentsArr:"first comment",like:0,id:"1"},{postsAndCommentsArr:"second comment",like:0,id:"2"},{postsAndCommentsArr:"theard comment",like:0,id:"3"}],
            [{postsAndCommentsArr:"first comment",like:0,id:"1"}],
            [{postsAndCommentsArr:"first comment",like:0,id:"1"}],
            [{postsAndCommentsArr:"first comment",like:0,id:"1"}],
            [{postsAndCommentsArr:"first comment",like:0,id:"1"}],
            [{postsAndCommentsArr:"first comment",like:0,id:"1"}]],

       
        }
      }
    addLike(e){
        let tempPost = [...this.state.posts];
        switch (likeOfComment) {
            case 'post1':
                tempPost[0][e.target.id].like++;
                e.target.innerHTML=`Like ${tempPost[0][e.target.id].like}&nbsp;&nbsp;`
                break;
            case 'post2':
                tempPost[1][e.target.id].like++;
                e.target.innerHTML=`Like ${tempPost[1][e.target.id].like}&nbsp;&nbsp;`
                break;
            case 'post3':
                tempPost[2][e.target.id].like++;
                e.target.innerHTML=`Like ${tempPost[2][e.target.id].like}&nbsp;&nbsp;`
                break;
            case 'post4':
                tempPost[3][e.target.id].like++;
                e.target.innerHTML=`Like ${tempPost[3][e.target.id].like}&nbsp;&nbsp;`
                break;
            case 'post5':
                tempPost[4][e.target.id].like++;
                e.target.innerHTML=`Like ${tempPost[4][e.target.id].like}&nbsp;&nbsp;`
                break;
            case 'post6':
                tempPost[5][e.target.id].like++;
                e.target.innerHTML=`Like ${tempPost[5][e.target.id].like}&nbsp;&nbsp;`
                break;                    
        
        }
        this.setState({posts: tempPost});

    }
    postsTarget(e){
        likeOfComment = e.target.id;
        
    }
    addComment(e){
        let d = new Date()
        let id = Math.floor(Math.random() * 10000)* d.getMinutes()
        let tempPost = [...this.state.posts]
        switch (likeOfComment) {
            case 'post1':
                tempPost[0].push({postsAndCommentsArr:document.getElementById("postText1").value,like:0, id});
                break;
            case 'post2':
                tempPost[1].push({postsAndCommentsArr:document.getElementById("postText2").value,like:0,id });
                break;
            case 'post3':
                tempPost[2].push({postsAndCommentsArr:document.getElementById("postText3").value,like:0,id });
                break;
            case 'post4':
                tempPost[3].push({postsAndCommentsArr:document.getElementById("postText4").value,like:0 ,id});
                break;
            case 'post5':
                tempPost[4].push({postsAndCommentsArr:document.getElementById("postText5").value,like:0,id });
                break;
            case 'post6':
                tempPost[5].push({postsAndCommentsArr:document.getElementById("postText6").value,like:0 ,id});
                break;                         
        }
        this.setState({posts: tempPost});
    }
    cancel(e){
        switch (e.target.id) {
            case 'cancel1':
                document.getElementById("postText1").value="";
                break;
            case 'cancel2':
                document.getElementById("postText2").value="";
                break;
            case 'cancel3':
                document.getElementById("postText3").value="";
                break;
            case 'cancel4':
                document.getElementById("postText4").value="";
                break;
            case 'cancel5':
                document.getElementById("postText5").value="";
                break;
            case 'cancel6':
                document.getElementById("postText6").value="";
                break;                         
        }
    }
        render() {
            let date = new Date();
            let likeIndex1=0,likeIndex2=0,likeIndex3=0,likeIndex4=0,likeIndex5=0,likeIndex6=0,temp=0;
            return (
            <MDBCard className="my-5 px-5 pb-5">
            <MDBCardBody>
                <Title name="Recent" title="posts"/>

                <p className="text-center w-responsive mx-auto mb-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
                </p>
                <MDBRow>
                <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img
                        className="img-fluid"
                        src="images/news1.png"
                        alt=""
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Title of the news</strong>
                    </h3>
                    <p className="dark-grey-text">
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat facere possimus,
                    omnis voluptas assumenda est, omnis dolor repellendus et aut
                    officiis debitis cum soluta nobis est eligendi placeat facere
                    aut rerum.
                    </p>
                    <p>
                    by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
                    </p>
                            <button id="post1" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter1"
                            onClick={(e)=> {
                                this.postsTarget(e);
                                }}
                                >comments</button>
                                
                            <div className="modal fade h-90" id="exampleModalCenter1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="container mt-5">
                                                <div className="d-flex justify-content-center row">
                                                    <div className="col-md-8">
                                                        <div className="d-flex flex-column comment-section">
                                                            <div className="bg-white p-2">

                                                                {this.state.posts[0].map(post=> (
                                                                    <>
                                                                        <div></div>
                                                                        <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                        <div className="d-flex flex-column justify-content-start ml-2">
                                                                            <span className="d-block font-weight-bold name">Marry Andrews</span>
                                                                            <span className="date text-black-50">posted at:&nbsp;{date.getHours()}:{date.getMinutes()} - {date.getDate()}/{date.getMonth()+1}/{date.getYear()}</span>
                                                                        </div>
                                                                     
                                                                            <span style={{fontSize:"10px",cursor: "pointer"}} id={likeIndex1++}
                                                                                onClick={(e)=>  {
                                                                                    this.addLike(e);
                                                                                    temp = e.target.id
                                                                                    }}>Like {this.state.posts[0][temp].like}&nbsp;&nbsp;
                                                                                    </span>
                                                                            <span className="comment-text">{post.postsAndCommentsArr} </span>
                                                                       
                                                                    </>
                                                                ))}


                                                            </div>


                                                            <div className="bg-light p-2">
                                                                <div className="d-flex flex-row align-items-start">
                                                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                    <textarea id="postText1" className="form-control ml-1 shadow-none textarea"></textarea>
                                                                </div>
                                                            <div className="mt-2 text-right">
                                                                <button id="addComment1" className="btn btn-primary btn-sm shadow-none" type="button"
                                                                onClick={(e)=> {
                                                                    this.addComment(e);
                                                                    }}>Post comment</button>
                                                                <button id="cancel1" className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button"
                                                                 onClick={(e)=>  {
                                                                    this.cancel(e);
                                                                    }}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>                
                                                </div>
                                            </div>
                                        </div>                     
                                        </div> 
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img
                        className="img-fluid"
                        src="images/news2.png"
                        alt=""
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Title of the news</strong>
                    </h3>
                    <p className="dark-grey-text">
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat facere possimus,
                    omnis voluptas assumenda est, omnis dolor repellendus et aut
                    officiis debitis cum soluta nobis est eligendi placeat facere
                    aut rerum.
                    </p>
                    <p>
                    by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
                    </p>
                            <button id="post2" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter2"
                            onClick={(e)=> {
                                this.postsTarget(e);
                                }}
                                >comments</button>
                                
                            <div className="modal fade h-90" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="container mt-5">
                                                <div className="d-flex justify-content-center row">
                                                    <div className="col-md-8">
                                                        <div className="d-flex flex-column comment-section">
                                                            <div className="bg-white p-2">

                                                                {this.state.posts[1].map(post=> (
                                                                    <>   
                                                                        <div></div>
                                                                        <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                        <div className="d-flex flex-column justify-content-start ml-2">
                                                                            <span className="d-block font-weight-bold name">Marry Andrews</span>
                                                                            <span className="date text-black-50">posted at:&nbsp;{date.getHours()}:{date.getMinutes()} - {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</span>
                                                                        </div>
                                                                     
                                                                            <span style={{fontSize:"10px",cursor: "pointer"}} id={likeIndex2++}
                                                                                onClick={(e)=>  {
                                                                                    this.addLike(e);
                                                                                    temp = e.target.id
                                                                                    }}>Like {this.state.posts[1][temp].like}&nbsp;&nbsp;
                                                                                    </span>
                                                                            <span className="comment-text">{post.postsAndCommentsArr} </span>
                                                                       
                                                                    </>
                                                                ))}
                                                            </div> 
                                                            <div className="bg-light p-2">
                                                                <div className="d-flex flex-row align-items-start">
                                                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                    <textarea id="postText2" className="form-control ml-1 shadow-none textarea"></textarea>
                                                                </div>
                                                            <div className="mt-2 text-right">
                                                                <button id="addComment2" className="btn btn-primary btn-sm shadow-none" type="button"
                                                                onClick={(e)=>  {
                                                                    this.addComment(e);
                                                                    }}>Post comment</button>
                                                                <button id="cancel2" className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button"
                                                                onClick={(e)=>  {
                                                                    this.cancel(e);
                                                                    }}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                     
                                        </div> 
                                        <div className="modal-footer">
                                            <button  type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img
                        className="img-fluid"
                        src="images/news3.png"
                        alt=""
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Title of the news</strong>
                    </h3>
                    <p className="dark-grey-text">
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat facere possimus,
                    omnis voluptas assumenda est, omnis dolor repellendus et aut
                    officiis debitis cum soluta nobis est eligendi placeat facere
                    aut rerum.
                    </p>
                    <p>
                    by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
                    </p>
                            <button id="post3" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter3"
                            onClick={(e)=> {
                                this.postsTarget(e);
                                }}
                                >comments</button>
                                
                            <div className="modal fade h-90" id="exampleModalCenter3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="container mt-5">
                                                <div className="d-flex justify-content-center row">
                                                    <div className="col-md-8">
                                                        <div className="d-flex flex-column comment-section">
                                                            <div className="bg-white p-2">

                                                                {this.state.posts[2].map(post=> (
                                                                    <>   
                                                                        <div></div>
                                                                        <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                        <div className="d-flex flex-column justify-content-start ml-2">
                                                                            <span className="d-block font-weight-bold name">Marry Andrews</span>
                                                                            <span className="date text-black-50">posted at:&nbsp;{date.getHours()}:{date.getMinutes()} - {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</span>
                                                                        </div>
                                                                     
                                                                            <span style={{fontSize:"10px",cursor: "pointer"}} id={likeIndex3++}
                                                                                onClick={(e)=>  {
                                                                                    this.addLike(e);
                                                                                    temp = e.target.id
                                                                                    }}>Like {this.state.posts[2][temp].like}&nbsp;&nbsp;
                                                                                    </span>
                                                                            <span className="comment-text">{post.postsAndCommentsArr} </span>
                                                                       
                                                                    </>
                                                                ))}
                                                            </div>
                                                            <div className="bg-light p-2">
                                                                <div className="d-flex flex-row align-items-start">
                                                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                    <textarea id="postText3" className="form-control ml-1 shadow-none textarea"></textarea>
                                                                </div>
                                                            <div className="mt-2 text-right">
                                                                <button id="addComment3" className="btn btn-primary btn-sm shadow-none" type="button"
                                                                onClick={(e)=>  {
                                                                    this.addComment(e);
                                                                    }}>Post comment</button>
                                                                <button id="cancel3" className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button"
                                                                onClick={(e)=>  {
                                                                    this.cancel(e);
                                                                    }}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                     
                                        </div> 
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img
                        className="img-fluid"
                        src="images/news4.jpg"
                        alt=""
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Title of the news</strong>
                    </h3>
                    <p className="dark-grey-text">
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat facere possimus,
                    omnis voluptas assumenda est, omnis dolor repellendus et aut
                    officiis debitis cum soluta nobis est eligendi placeat facere
                    aut rerum.
                    </p>
                    <p>
                    by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
                    </p>
                            <button id="post4" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter4"
                            onClick={(e)=> {
                                this.postsTarget(e);
                                }}
                                >comments</button>
                                
                            <div className="modal fade h-90" id="exampleModalCenter4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="container mt-5">
                                                <div className="d-flex justify-content-center row">
                                                    <div className="col-md-8">
                                                        <div className="d-flex flex-column comment-section">
                                                            <div className="bg-white p-2">

                                                                {this.state.posts[3].map(post=> (
                                                                    <>   
                                                                        <div></div>
                                                                        <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                        <div className="d-flex flex-column justify-content-start ml-2">
                                                                            <span className="d-block font-weight-bold name">Marry Andrews</span>
                                                                            <span className="date text-black-50">posted at:&nbsp;{date.getHours()}:{date.getMinutes()} - {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</span>
                                                                        </div>
                                                                        {/* {console.log(this.state.posts[0].findIndex(item => item.id === post.id))} */}
                                                                     
                                                                            <span style={{fontSize:"10px",cursor: "pointer"}} id={likeIndex4++}
                                                                                onClick={(e)=>  {
                                                                                    this.addLike(e);
                                                                                    temp = e.target.id
                                                                                    }}>Like {this.state.posts[3][temp].like}&nbsp;&nbsp;
                                                                                    </span>
                                                                            <span className="comment-text">{post.postsAndCommentsArr} </span>
                                                                       
                                                                    </>
                                                                ))}
                                                            </div>
                                                            <div className="bg-light p-2">
                                                                <div className="d-flex flex-row align-items-start">
                                                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                    <textarea id="postText4" className="form-control ml-1 shadow-none textarea"></textarea>
                                                                </div>
                                                            <div className="mt-2 text-right">
                                                                <button id="addComment4" className="btn btn-primary btn-sm shadow-none" type="button"
                                                                onClick={(e)=>  {
                                                                    this.addComment(e);
                                                                    }}>Post comment</button>
                                                                <button id="cancel4" className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button"
                                                                onClick={(e)=>  {
                                                                    this.cancel(e);
                                                                    }}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                     
                                        </div> 
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img
                        className="img-fluid"
                        src="images/news5.jpg"
                        alt=""
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Title of the news</strong>
                    </h3>
                    <p className="dark-grey-text">
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat facere possimus,
                    omnis voluptas assumenda est, omnis dolor repellendus et aut
                    officiis debitis cum soluta nobis est eligendi placeat facere
                    aut rerum.
                    </p>
                    <p>
                    by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
                    </p>
                            <button id="post5" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter5"
                            onClick={(e)=> {
                                this.postsTarget(e);
                                }}
                                >comments</button>
                                
                            <div className="modal fade h-90" id="exampleModalCenter5" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="container mt-5">
                                                <div className="d-flex justify-content-center row">
                                                    <div className="col-md-8">
                                                        <div className="d-flex flex-column comment-section">
                                                            <div className="bg-white p-2">
                                                                {this.state.posts[4].map(post=> (
                                                                    <>   
                                                                        <div></div>
                                                                        <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                        <div className="d-flex flex-column justify-content-start ml-2">
                                                                            <span className="d-block font-weight-bold name">Marry Andrews</span>
                                                                            <span className="date text-black-50">posted at:&nbsp;{date.getHours()}:{date.getMinutes()} - {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</span>
                                                                        </div>
                                                                        {/* {console.log(this.state.posts[0].findIndex(item => item.id === post.id))} */}
                                                                     
                                                                            <span style={{fontSize:"10px",cursor: "pointer"}} id={likeIndex5++}
                                                                                onClick={(e)=>  {
                                                                                    this.addLike(e);
                                                                                    temp = e.target.id
                                                                                    }}>Like {this.state.posts[4][temp].like}&nbsp;&nbsp;
                                                                                    </span>
                                                                            <span className="comment-text">{post.postsAndCommentsArr} </span>
                                                                       
                                                                    </>
                                                                ))}
                                                            </div>



                                                            <div className="bg-light p-2">
                                                                <div className="d-flex flex-row align-items-start">
                                                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                    <textarea id="postText5" className="form-control ml-1 shadow-none textarea"></textarea>
                                                                </div>
                                                            <div className="mt-2 text-right">
                                                                <button id="addComment5" className="btn btn-primary btn-sm shadow-none" type="button"
                                                                onClick={(e)=>  {
                                                                    this.addComment(e);
                                                                    }}>Post comment</button>
                                                                <button id="cancel5" className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button"
                                                                onClick={(e)=>  {
                                                                    this.cancel(e);
                                                                    }}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                     
                                        </div> 
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img
                        className="img-fluid"
                        src="images/news6.jpg"
                        alt=""
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Title of the news</strong>
                    </h3>
                    <p className="dark-grey-text">
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat facere possimus,
                    omnis voluptas assumenda est, omnis dolor repellendus et aut
                    officiis debitis cum soluta nobis est eligendi placeat facere
                    aut rerum.
                    </p>
                    <p>
                    by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
                    </p>
                            <button id="post6" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter6"
                            onClick={(e)=> {
                                this.postsTarget(e);
                                }}
                                >comments</button>
                                
                            <div className="modal fade h-90" id="exampleModalCenter6" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="container mt-5">
                                                <div className="d-flex justify-content-center row">
                                                    <div className="col-md-8">
                                                        <div className="d-flex flex-column comment-section">
                                                            <div className="bg-white p-2">

                                                                {this.state.posts[5].map(post=> (
                                                                    <>   
                                                                        <div></div>
                                                                        <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                        <div className="d-flex flex-column justify-content-start ml-2">
                                                                            <span className="d-block font-weight-bold name">Marry Andrews</span>
                                                                            <span className="date text-black-50">posted at:&nbsp;{date.getHours()}:{date.getMinutes()} - {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</span>
                                                                        </div>
                                                                     
                                                                            <span style={{fontSize:"10px",cursor: "pointer"}} id={likeIndex6++}
                                                                                onClick={(e)=>  {
                                                                                    this.addLike(e);
                                                                                    temp = e.target.id
                                                                                    }}>Like {this.state.posts[5][temp].like}&nbsp;&nbsp;
                                                                                    </span>
                                                                            <span className="comment-text">{post.postsAndCommentsArr} </span>
                                                                    </>
                                                                ))}
                                                            </div>



                                                            <div className="bg-light p-2">
                                                                <div className="d-flex flex-row align-items-start">
                                                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                    <textarea id="postText6" className="form-control ml-1 shadow-none textarea"></textarea>
                                                                </div>
                                                            <div className="mt-2 text-right">
                                                                <button id="addComment6" className="btn btn-primary btn-sm shadow-none" type="button"
                                                                 onClick={(e)=>  {
                                                                    this.addComment(e);
                                                                    }}>Post comment</button>
                                                                <button id="cancel6" className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button"
                                                                 onClick={(e)=>  {
                                                                    this.cancel(e);
                                                                    }}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                     
                                        </div> 
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </MDBCol>
                </MDBRow>
            </MDBCardBody>
            </MDBCard>
        )
        }

}