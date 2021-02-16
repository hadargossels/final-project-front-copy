import React, { Component } from 'react'
import ReactPlayer from "react-player"


const MyPlayer = () => {
    return (
        <ReactPlayer
            url="https://www.youtube.com/watch?v=_pqGNSXC9to"
            controls={true}
            width="100%"
        />
    )
}
export default class AboutUs extends Component {
    render() {
        return (
            <div className="py-5">

                <div className="container">
                    <div className="row px-3">
                        <div className="col-md-6 pb-3">
                        <h1 className="text-danger pb-3">About us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ante non tellus aliquet volutpat. Nunc luctus viverra posuere. Proin pulvinar vulputate sem a placerat. Proin ullamcorper libero mauris, eu pulvinar nisi imperdiet at.</p>
                            <p>In eget nulla at ligula vulputate suscipit. Pellentesque sit amet viverra diam, a porta ipsum. Vivamus mattis lacus in ultricies porttitor. Curabitur vehicula non nisl id ultrices.</p>
                            <MyPlayer/>
                        </div>
                        <div className="col-md-6 pb-3">
                            <img className="img-fluid rounded" alt="" src="./img/about.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
