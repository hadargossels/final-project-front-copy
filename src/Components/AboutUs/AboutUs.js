import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
    render () {
        return(    
            <main className="AboutUs">
                <div className="w-1/2 bg-gray-300 rounded border-8 border-gray-500 mx-auto my-10 text-center p-5 text-2xl">
                    <h1 className="text-5xl text-yellow-700 font-semibold pb-5">About Us</h1>
                    <p className="pb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus turpis sed lectus efficitur pretium at at tellus. 
                        Mauris sit amet dolor nec purus hendrerit sagittis in at urna. Pellentesque.
                    </p>
                    <p className="pb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus libero eget felis sollicitudin, eu imperdiet nunc tristique. 
                        Sed euismod ipsum a sodales pulvinar. Duis tempor imperdiet nisl at egestas. Nulla libero sem, sagittis nec cursus nec, bibendum at magna. 
                        Aliquam sagittis feugiat arcu vitae tincidunt. Pellentesque suscipit sapien sed nunc porta condimentum. Integer nec mi ipsum. Quisque tempor 
                        auctor turpis, sed dictum augue pellentesque euismod. Nulla cursus quam sapien, vitae molestie nulla mollis a.
                    </p>
                    <img 
                        src="https://cdn.pixabay.com/photo/2016/09/03/12/06/marvel-1641554_1280.jpg" 
                        className="w-1/2 ml-64 border border-black" 
                        alt="comicbooksImage"
                    />
                </div>
            </main>
        )
    }
}

export default AboutUs;