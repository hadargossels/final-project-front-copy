import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from "react-bootstrap";


class Footer extends React.Component {
    render() {
        return (
        <Card className="text-center">
            <Card.Body>
                <div className="socialmedia-links">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram-square"></i></a>
                    <a href="https://twitter.com/"><i className="fab fa-twitter-square"></i></a>
                </div>
                <div className="footer-info">
                    <Link to="/contact">Contact |</Link>
                    <Link to="/info">Info</Link>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted">© 2021 Copyright HomeStyle</Card.Footer>
        </Card>
        );
    }
}

export default Footer;