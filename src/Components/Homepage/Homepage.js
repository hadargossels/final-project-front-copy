import React, { Component } from 'react';
import './Homepage.css';
import ProductSlider from '../ProductSlider/ProductSlider';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import { ModalProvider, Modal, useModal, ModalTransition} from 'react-simple-hook-modal';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    render () {
        return(    
            <ModalProvider>
            <main className="othe pb-12">
                <HeaderSlider />
                <div>
                    <Link to="/catalogue/specials">
                        <h1 className="text-6xl font-bold text-center text-yellow-200 ">Special offers!</h1>
                    </Link>
                    <ProductSlider slideId="slide"/>
                </div>
                <div>
                    <Link to="/catalogue/new">
                        <h1 className="text-6xl font-bold text-center text-yellow-200">New Items!</h1>
                    </Link>
                    <ProductSlider slideId="new"/>
                </div>
                <div>
                    <Link to="/catalogue/top">
                    <h1 className="text-6xl font-bold text-center text-yellow-200">Top Sellers!</h1>
                    </Link>
                    <ProductSlider slideId="top"/>
                </div>
            </main>
            </ModalProvider>
        )
    }
}

export default Homepage;