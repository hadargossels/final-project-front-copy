import React from 'react';
import {Link} from 'react-router-dom';


export default function Article(props) {
    console.log(props);
    return (
        <Link to={`/posts/${props.post._id}`} style={{ color: 'black', textDecoration: 'none' }}>
            <div className="row border py-2 mb-4">
                <div className="col-6 col-md-10">
                    <div className="d-flex flex-column justify-content-between">
                        <div>
                            <h5>{props.post.title}</h5>
                            <p>{props.post.brief}</p>
                        </div>
                        <div className="text-muted">
                            <p >Author:</p>
                        </div>
                        <div className="text-muted">
                            <p >Date:{props.post.createdate}</p>
                        </div>
                    </div>
                </div>
                    
            </div>
        </Link>
    );
}
