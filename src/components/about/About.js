import React, { Component } from 'react'
import "./about.css"
import Title from '../additionsComp/Title'

export default class About extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="about-section">
                <Title name="About" title="Us"  />
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
                </div>
                <div className="row">
                    <iframe title="Youtube video" width="420" height="345" src="https://www.youtube.com/embed/XG5D82CWIXg">
                    </iframe>
                </div>
                <h2  style={{textAlign:"center"}}>Our Team</h2>
                <div className="aboutrow">
                <div className="about-column">
                    <div className="about-card">
                    <img src="images/team1.jpg" alt="Jane" style={{width:"100%"}}/>
                    <div className="about-container">
                        <h2>Jane Doe</h2>
                        <p className="about-title">CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button className="about-button">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div className="about-column">
                    <div className="about-card">
                    <img src="images/team2.jpg" alt="Mike" style={{width:"100%"}}/>
                    <div className="about-container">
                        <h2>Mike Ross</h2>
                        <p className="about-title">Art Director</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>mike@example.com</p>
                        <p><button className="about-button">Contact</button></p>
                    </div>
                    </div>
                </div>
                
                <div className="about-column">
                    <div className="about-card">
                    <img src="images/team3.jpg" alt="John" style={{width:"100%"}}/>
                    <div className="about-container">
                        <h2>John Doe</h2>
                        <p className="about-title">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button className="about-button">Contact</button></p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                
            </div>
           
        )
    }
}

