import React, { Component } from 'react'
import CatalogProduct from './CatalogProduct'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'
import img1 from '../../../imgs/Samsung_S20-2.jpg';
import img2 from '../../../imgs/Samsung_S21-1.png';
import img3 from '../../../imgs/Samsung_Z-1.jpg';
import img4 from '../../../imgs/Iphone_12proMax-1.jpg';
import img5 from '../../../imgs/Iphone_12-1.jpg';
import img6 from '../../../imgs/Iphone_SE-1.jpg';
import img7 from '../../../imgs/Nokia_1.4-1.jpg';
import img8 from '../../../imgs/Huawei_Mate40Pro-1.jpg';
import img9 from '../../../imgs/Google_Pixel5-1.jpg';
import './Catalog.css'

export default class Catalog extends Component {
    constructor() {
        super();

        this._data = [{ img: img1, title: 'Samsung Galaxy S20 Ultra 5G', type: 'android', stars: 4, desc: 'Meet Galaxy S20 Ultra 5G. With revolutionary 8K Video Snap, 5G connectivity and Space Zoom up to 100x, the way you capture and share your life will never be the same.', price: 950 },
        { img: img2, title: 'Samsung Galaxy S21 Ultra 5G', type: 'android', stars: 5, desc: 'The highest resolution photos and video on a smartphone. Galaxy`s fastest processor yet. A battery that goes all-day—and then some. First ever S Pen compatibility. A striking new design.', price: 1199 },
        { img: img3, title: 'Samsung Galaxy Z Fold 2 5G', type: 'android', stars: 5, desc: 'A mind-bending glass screen that folds like a book. A hands-free camera that shoots when you wave. A precision crafted hinge that transforms a cutting-edge smartphone into something much more.', price: 2899 },
        { img: img4, title: 'Apple iPhone 12 Pro Max', type: 'iphone', stars: 5, desc: 'A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance.', price: 1099 },
        { img: img5, title: 'Apple iPhone 12', type: 'iphone', stars: 4, desc: 'A14 Bionic, the fastest chip in a smartphone.An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all in a perfect size.', price: 829 },
        { img: img6, title: 'Apple iPhone SE(2020)', type: 'iphone', stars: 3, desc: 'iPhone SE packs a powerful A13 Bionic chip into the most popular size at the most affordable price. It’s just what you’ve been waiting for.', price: 399 },
        { img: img7, title: 'Nokia 1.4', type: 'android', stars: 2, desc: 'Make the most of learning and playtime on the beautiful 6.51” HD+ edge-to-edge screen – there’s plenty of room for both. Plus, have fun and stay safe with the whole family thanks to built-in parental controls.', price: 100 },
        { img: img8, title: 'Huawei Mate 40 Pro', type: 'android', stars: 4, desc: 'See beyond the horizon, explore the unknown, and leap boldly into the future, with unprecedented power, speed and imagination. Embrace the intelligence and live an intimate life with innovative technology on the HUAWEI Mate 40 Pro.', price: 1218.99 },
        { img: img9, title: 'Google Pixel 5', type: 'android', stars: 3, desc: 'The Google Pixel 5 is a charming and reasonably-priced premium phone with an amazing camera and good battery life.', price: 699 },];
        
        this.state = {
            productsArr: this._data,
            backUpArr: this._data,
            sortingBy: "Sort By",
            priceFil: 0,
            rateFil: 0,
            typeFil: 0
        };

    }
    //* Listener to filter choosing: 
    onChangePriceFilter = (event) => {
        if (event.target.name === "300" || event.target.name === "300 - 600" || event.target.name === "600") {
            let tmpFil = this.state.priceFil;
            if (event.target.checked) {
                tmpFil++;
                this.setState({ priceFil : tmpFil }, () => {this.filterData(event)} )
            }
            else {
                tmpFil--;
                this.setState({ priceFil : tmpFil }, () => {this.filterData(event)} )
            }
        }
        if (event.target.name === "0 - 2" || event.target.name === "3 - 4" || event.target.name === "5") {
            let tmpFil = this.state.rateFil;
            if (event.target.checked) {
                tmpFil++;
                this.setState({ rateFil : tmpFil }, () => {this.filterData(event)} )
            }
            else {
                tmpFil--;
                this.setState({ rateFil : tmpFil }, () => {this.filterData(event)} )
            }
        }
        if (event.target.name === "iphone" || event.target.name === "android") {
            let tmpFil = this.state.typeFil;
            if (event.target.checked) {
                tmpFil++;
                this.setState({ typeFil : tmpFil }, () => {this.filterData(event)} )
            }
            else {
                tmpFil--;
                this.setState({ typeFil : tmpFil }, () => {this.filterData(event)} )
            }
        }
    }

    //* Filter the products according to the chosen methods:
    filterData = (event) => {
        let tmpArr = [];
        if (this.state.priceFil > 1 || this.state.rateFil > 1 || this.state.typeFil > 1) {
            this.setState({ productsArr : [] })
        }
        else if (this.state.priceFil === 0 && this.state.rateFil === 0 && this.state.typeFil === 0) {
            this.setState({ productsArr : this.state.backUpArr });
        }
        else {
            for (const product of this.state.backUpArr) {
                //! Filter by price:
                if (this.state.priceFil) {
                    if (event.target.name === "300") {
                        if (product.price <= 300) {
                            tmpArr.push(product);
                        }
                    }
                    if (event.target.name === "300 - 600") {
                        if (product.price > 300 && product.price <= 600) {
                            tmpArr.push(product);
                        }
                    }
                    if (event.target.name === "600") {
                        if (product.price > 600) {
                            tmpArr.push(product);
                        }
                    }
                }
                //! Filter by rating:
                if (this.state.rateFil) {
                    if (event.target.name === "0 - 2") {
                        if (product.stars <= 2) {
                            tmpArr.push(product);
                        }
                    }
                    if (event.target.name === "3 - 4") {
                        if (product.stars >= 3 && product.stars <= 4) {
                            tmpArr.push(product);
                        }
                    }
                    if (event.target.name === "5") {
                        if (product.stars === 5) {
                            tmpArr.push(product);
                        }
                    }
                }
                //! Filter by type:
                if (this.state.typeFil) {
                    if (event.target.name === "iphone") {
                        if (product.type === "iphone") {
                            tmpArr.push(product);
                        }
                    }
                    if (event.target.name === "android") {
                        if (product.type === "android") {
                            tmpArr.push(product);
                        }
                    }
                }
            }
            this.setState({ productsArr : tmpArr });
        }
    }

    //* Listener for sorting choosing:
    sortingMethod = (event) => {
        this.setState({ sortingBy: event }, () => {
            let tmpArr = [];
            switch (event) {
                case "Sort by price descending":
                    tmpArr = (this.state.productsArr).sort((a, b) => b.price - a.price);
                    break;
                case "Sort by price ascending":
                    tmpArr = (this.state.productsArr).sort((a, b) => a.price - b.price);
                    break;
                case "Sort by customers ratings":
                    tmpArr = (this.state.productsArr).sort((a, b) => b.stars - a.stars);
                    break;
                default:
                    break;
            }
            this.setState({ productsArr : tmpArr });
        });
    }

    render() {
        return (
            <div className="mainStyle">
                <h2> Mobile Phones </h2>
                {/* //! Filtering Items: */}
                <div className="filters">
                    <p style={{ textDecoration: 'underline', fontSize: '1.5em', margin: '30px 0' }}> Filter by price </p>
                    <label><input type="checkbox" name="300" onChange={this.onChangePriceFilter} style={{ marginRight: '75px' }} /> Up to 300$ </label><br />
                    <label><input type="checkbox" name="300 - 600" onChange={this.onChangePriceFilter} />Between 300$ - 600$</label><br />
                    <label><input type="checkbox" name="600" onChange={this.onChangePriceFilter} style={{ marginRight: '45px' }} />More than 600$</label><br />
                    <hr />
                    <p style={{ textDecoration: 'underline', fontSize: '1.5em', margin: '30px 0' }}> Filter by rating </p>
                    <label><input type="checkbox" name="0 - 2" onChange={this.onChangePriceFilter} /> &#9734;&#9734;&#9734;&#9734;&#9734; - &#9733;&#9733;&#9734;&#9734;&#9734; </label><br />
                    <label><input type="checkbox" name="3 - 4" onChange={this.onChangePriceFilter} /> &#9733;&#9733;&#9733;&#9734;&#9734; - &#9733;&#9733;&#9733;&#9733;&#9734; </label><br />
                    <label><input type="checkbox" name="5" onChange={this.onChangePriceFilter} style={{ marginRight: '95px' }} /> &#9733;&#9733;&#9733;&#9733;&#9733; </label><br />
                    <hr />
                    <p style={{ textDecoration: 'underline', fontSize: '1.5em', margin: '30px 0' }}> Filter by type </p>
                    <label><input type="checkbox" name="iphone" onChange={this.onChangePriceFilter} style={{ marginRight: '20px' }} />Iphone</label><br />
                    <label><input type="checkbox" name="android" onChange={this.onChangePriceFilter} style={{ marginRight: '16px' }} />Android</label><br />
                </div>
                {/* //! Sorting Items: */}
                <div className="sorting">
                    <DropdownButton
                        title={this.state.sortingBy}
                        id="dropdown-menu-align-right"
                        onSelect={this.sortingMethod}
                    >
                        <Dropdown.Item eventKey="Sort by price descending">Sort by price descending</Dropdown.Item>
                        <Dropdown.Item eventKey="Sort by price ascending">Sort by price ascending</Dropdown.Item>
                        <Dropdown.Item eventKey="Sort by customers ratings">Sort by customers ratings</Dropdown.Item>
                    </DropdownButton>
                </div>
                {/* //! Printing the Items: */}
                <div className="container">
                    <div className="row row-cols-3">
                        {this.state.productsArr.map((product,index) => (
                            <div className="cards" key={index}>
                                <Link to={"/mobile" + index} style={{ textDecoration: 'none' }}><CatalogProduct img={product.img} title={product.title} stars={product.stars} desc={product.desc} price={product.price} /></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
