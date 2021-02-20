import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import articles from '../data/articles.json';
import Article from './Article';
import '../css/blog.css';

class Blog extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="d-flex flex-column align-items-center justify-content-center" id="blog">
                        <h1 className="mb-4">Blog</h1>
                    </div>
                </div>
                
                <div className="d-flex flex-column align-items-center justify-content-center my-5" id="articles">
                    <div className="container-lg py-3" id="container-articles">
                        {articles.map(article => 
                            <Article
                                key={article.id}
                                article={article}
                            ></Article>
                        )}
                    </div>
                </div>

                <div className="something">

                </div>
                
                
            </div>
        );
    }
}

export default Blog;

