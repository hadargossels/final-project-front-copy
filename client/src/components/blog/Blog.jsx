import React, { useEffect, useState } from 'react';
import Article from './Article';
import axios from 'axios';
import '../../css/blog.css';

export default function Blog() {

    const [articles, setArticles] = useState();


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/articles')
            setArticles(response.data);
        };
        
        fetchData();
    }, [])

    return (
        <div>
            <div className="container-fluid">
                <div className="d-flex flex-column align-items-center justify-content-center" id="blog">
                    <h1 className="mb-4">Blog</h1>
                </div>
            </div>
            
            <div className="d-flex flex-column align-items-center justify-content-center my-5" id="articles">
                <div className="container-lg py-3" id="container-articles">
                    
                    {articles ? 
                        articles.map(article => 
                            <Article key={article.id} article={article}/>
                        )
                    : null
                    }

                </div>
            </div>
        </div>
    );
}
