import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import storeItems from './StoreItems.jsx'
import '../Home.css';
import 'bootstrap/js/dist/carousel';


class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    bestSellersCarousel = () => {
        const cards = [];
        storeItems.slice(0, 6).forEach((item, index) => {
            cards.push(<div className={`col-md-4 ${index%3!==0? 'clearfix d-none d-md-block' : ''}`} key={index}>
                        <Link to={`/${item.url}`} className="bestSeller" style={{color: 'black', textDecoration: 'none'}}>
                            <div className="card">
                                <img className="card-img-top" src={`${item.images[0]}`} alt={item.name}></img>
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>)
        });

        const sliders = [];
        for (let i=0; i<2; i++) {
            sliders.push(<div className={`carousel-item ${i===0? 'active' : ''}`} key={i}>
                            <div className="row">
                                {cards.slice(i*3, i*3+3)}
                            </div>
                        </div>);
        }

        return (
            <div id="multi-item-example" className="container carousel slide carousel-multi-item" data-ride="carousel">
                {/* <!--Controls--> */}
                <div className="controls-top">
                    <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                    <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
                </div>
                {/* <!--Indicators--> */}
                <ol className="carousel-indicators">
                    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                </ol>

                {/* <!--Slides--> */}
                <div className="carousel-inner" role="listbox">
                    {sliders}
                </div>
                {/* <!--/.Slides--> */}
            </div>
        // {/* <!--/.Carousel Wrapper--> */}
        )  
    }

    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="d-flex flex-column align-items-center justify-content-center" id="major">
                        <h1 className="mb-4">UP TO 30% OFF</h1>
                        <Link to="/store">
                        <button type="button" className="btn btn-outline-secondary" style={{backgroundColor: `rgb(204, 204, 204, 0.8)`}}>SHOP</button>
                        </Link>
                    </div>
                </div>
                <div className="container-fluid pt-3" style={{height: '400px'}}>
                    <div className="row text-center categories">
                        
                        <div className="col-12 col-md-4">
                            <Link to={{pathname: "/store/bedroom", category: "bedroom"}} style={{color: 'black', textDecoration: 'none'}}>
                                <div className="ml-5 box" id="bedroom">
                                    <h1 className="pt-3">BEDROOM</h1>
                                </div>
                            </Link>
                        </div>
                        
                        <div className="col-12 col-md-4">
                            <Link to={{pathname: "/store/bathroom", category: "bathroom"}} style={{color: 'black', textDecoration: 'none'}}>
                                <div className="box" id="bathroom">
                                    <h1 className="pt-3">BATHROOM</h1>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-4">
                            <Link to={{pathname: "/store/livingroom", category: "living room"}} style={{color: 'black', textDecoration: 'none'}}>
                                <div className="mr-5 box" id="living_room">
                                    <h1 className="pt-3">LIVING ROOM</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '400px', backgroundColor: '#E9967A', color:'white'}}>
                    <h1>Sale Up to</h1>
                    <h1>30%</h1>
                    <Link to={{pathname: "/store/sale", onSale: true}} style={{color: 'white'}}>
                    <h2>See Products</h2>
                    </Link>
                </div>


                <div className="container-fluid text-center py-4">
                    <h1>Best Sellers</h1>
                    {this.bestSellersCarousel()}
                </div>

            </div>
        );
    }
    
}
export default Home;


{/* <Link to="/">
<div className="container">
    <div className="row">
        <img className="d-block mx-auto" src={images.logo} alt="Home Style logo"/>
    </div>
</div>
</Link> */}