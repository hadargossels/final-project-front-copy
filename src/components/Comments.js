import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
export default function Note(props) {
    return (
        <div className="modal fade h-90" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="container mt-5">
                                                <div className="d-flex justify-content-center row">
                                                    <div className="col-md-8">
                                                        <div className="d-flex flex-column comment-section">
                                                            <div className="bg-white p-2">
                                                                <div className="d-flex flex-row user-info">
                                                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                    <div className="d-flex flex-column justify-content-start ml-2">
                                                                        <span className="d-block font-weight-bold name">Marry Andrews</span>
                                                                        <span className="date text-black-50">Shared publicly - Jan 2020</span>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <p className="comment-text">{props.postsAndCommentsArr}</p>
                                                                </div>
                                                            </div>
                                                            <div className="bg-white">
                                                                <div className="d-flex flex-row fs-12">
                                                                    <div className="like p-2 cursor">
                                                                        <i className="fa fa-thumbs-o-up"></i>
    
                                                                        <span className="ml-1" id="like1"
                                                                        onClick={()=>  {
                                                                            this.addLike(props.id);
                                                                            }}>Like {props.like}</span>
                                                                    </div>
                                                                    {/* <div className="like p-2 cursor">
                                                                        <i className="fa fa-commenting-o"></i>
                                                                        <span className="ml-1">Comment</span>
                                                                    </div>
                                                                    <div className="like p-2 cursor">
                                                                        <i className="fa fa-share"></i>
                                                                        <span className="ml-1">Share</span>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                            <div className="bg-light p-2">
                                                                <div className="d-flex flex-row align-items-start">
                                                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                                    <textarea className="form-control ml-1 shadow-none textarea"></textarea>
                                                                </div>
                                                            <div className="mt-2 text-right">
                                                                <button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button>
                                                                <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
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
    )
}
