import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import images from '../images'

class Home extends React.Component {
    render(){
        return (
            <Link to="/">
                <div className="container">
                    <div className="row">
                        <img className="d-block mx-auto" src={images.logo} alt="Home Style logo"/>
                    </div>
                </div>
            </Link>
        );
    }
    
}
export default Home;