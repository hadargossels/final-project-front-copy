import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import '../css/blog.css';

class Article extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Link to={`/article-${this.props.article.id}`} style={{ color: 'black', textDecoration: 'none' }}>
                <div className="row border py-2 mb-4">
                    <div className="col-6 col-md-2">
                    <img src={this.props.article.img} alt="image" style={{height:"auto", width:"100%"}}></img>
                    </div>
                    <div className="col-6 col-md-10">
                        <div className="d-flex flex-column article-body">
                            <div>
                                <h5>{this.props.article.title}</h5>
                                <p>{this.props.article.brief}</p>
                            </div>
                            <div className="text-muted">
                                <p >Date:{this.props.article.date}</p>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </Link>
        );
    }
}

export default Article;