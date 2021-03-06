import React, { Component } from 'react';
import Article from './Article';
import axios from 'axios';
import '../../css/blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          articles: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/articles').then( response => {
            this.setState({ articles: response.data })
        })
    }

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
                        
                        {this.state.articles.map(article => 
                            <Article key={article.id} article={article}/>
                        )}

                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Blog;

