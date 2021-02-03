import React from 'react';
import {Card} from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
        <Card className="text-center">
            <Card.Body>
                <div className="socialmedia-links">
                    <a href="#!"><i className="fab fa-facebook"></i></a>
                    <a href="#!"><i className="fab fa-instagram-square"></i></a>
                    <a href="#!"><i className="fab fa-twitter-square"></i></a>
                </div>
                <div className="footer-info">
                    <a href="#!">Info |</a>
                    <a href="#!">Support</a>
                </div>
            </Card.Body>
        <Card.Footer className="text-muted">© 2021 Copyright HomeStyle</Card.Footer>
        </Card>
        );
    }
}

export default Footer;