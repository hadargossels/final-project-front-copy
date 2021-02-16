import React, { Component } from 'react';

class About extends Component{

    render(){
       return (
            <div
            style={{
                backgroundImage:"url('/images/about-bg.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                height: "85vh",
                backgroundPosition:"center" 
              }}
            >
                <div className="container text-center pt-5">
                    <h1>About Us</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet commodo. Arcu cursus euismod quis viverra. Sit amet mattis vulputate enim nulla. Ultrices sagittis orci a scelerisque. Quis commodo odio aenean sed adipiscing diam. Tempor orci dapibus ultrices in iaculis nunc. Ac ut consequat semper viverra. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Nisl suscipit adipiscing bibendum est ultricies integer. Id velit ut tortor pretium viverra suspendisse potenti. Netus et malesuada fames ac. Ultrices dui sapien eget mi proin sed. Elit sed vulputate mi sit amet. Eros in cursus turpis massa tincidunt. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Dictum at tempor commodo ullamcorper a lacus. Sagittis vitae et leo duis ut diam quam nulla porttitor.
                    </p>
                    <br/>
                    <img  className="rounded-pill m-5" src="/images/stay-fit.jpg" alt="..." width='100rem' height="100rem"/>
                    <img  className="rounded-pill m-5" src="/images/stay-calm.jpg" alt="..." width='100rem' height="100rem"/>
                </div>
            </div>
       )
    }






}

export default About;