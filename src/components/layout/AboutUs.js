import React, { Component } from 'react'
import ReactPlayer from "react-player"

export default class AboutUs extends Component {
    render() {
        const mainStyle = {
            margin: '10px',
            border: '2px solid gold',
            height: '40rem',
            position: 'relative',
        }
        return (
            <div style={mainStyle}>
                <h1 style={{ textAlign: 'center' }}>About Us</h1>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: "45%", marginTop: '40px' }}>
                        <h4 style={{ color: 'green', textAlign: 'center' }}>M-Phone Store</h4>
                        <br />
                        <p style={{ margin: '0 20px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula lorem at tellus dignissim scelerisque.
                            Praesent scelerisque lobortis eros, id eleifend dui pellentesque eu. Donec non pellentesque nisl, vulputate efficitur ante.
                            Nam leo nulla, congue nec sagittis et, eleifend ac velit. Pellentesque luctus sollicitudin malesuada.
                            Duis sed tempus mi. Duis tortor tortor, mattis at placerat eu, eleifend ut augue. Nullam ex est, ultricies sed leo id, mollis dictum magna.
                            Donec diam nisi, tincidunt quis scelerisque eget, convallis non libero. Duis eu augue ac nisi tempus elementum. Nulla dolor massa, fermentum non varius at, eleifend sit amet leo.
                            Nam porttitor condimentum lorem. Ut convallis justo velit, ac sollicitudin eros congue ac. Cras vehicula bibendum enim sit amet hendrerit.
                        </p>
                    </div>
                    <div style={{ width: "40%", margin: '40px 0 0 30px', float: 'right' }}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=cLyi-FfDGuc&t=84s"
                            controls={true}
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        )
    }
}