import React from 'react';
import ReactDOM from 'react-dom';
import {Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import images from '../images'

class Home extends React.Component {
    render(){
        return (
            <Link to="/">
                <div className="container">
                    <div className="row">
                        <img className="d-block mx-auto" src={images.logo} alt="First slide"/>
                    </div>
                </div>
            </Link>
        );
    }
    
}
export default Home;