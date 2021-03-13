import React from 'react';
import {Link} from 'react-router-dom';


export default function Article(props) {
    return (
        <Link to={`/article-${props.article.id}`} style={{ color: 'black', textDecoration: 'none' }}>
            <div className="row border py-2 mb-4">
                <div className="col-6 col-md-2">
                <img src={props.article.img} alt="article" style={{height:"auto", width:"100%"}}></img>
                </div>
                <div className="col-6 col-md-10">
                    <div className="d-flex flex-column justify-content-between">
                        <div>
                            <h5>{props.article.title}</h5>
                            <p>{props.article.brief}</p>
                        </div>
                        <div className="text-muted">
                            <p >Date:{props.article.date}</p>
                        </div>
                    </div>
                </div>
                    
            </div>
        </Link>
    );
}
