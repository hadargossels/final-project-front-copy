import React, { Component } from 'react';
import axios from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import CatalogProduct from './CatalogProduct'
import Pagination from './Pagination'
import './Catalog.css';

export default class Catalog extends Component {

    constructor(props) {

        super(props);

        this.state = {
            productsArr: (this.props._data) ? (this.props._data) : [],
            sortingBy: "Sort By",
            priceFil: 0,
            rateFil: 0,
            typeFil: 0,
            isSearch: (this.props._data) ? false : true,
            _mobilesData: [],
            _accessoriesData: [],
            currentPage: 1,
            productsPerPage: 9
        };

        let tmpMobileData = [], tmpAccData = []

        axios.get(`http://localhost:3000/products`)
            .then(res => {
                const data = res.data;
                for (const product of data) {
                    if (product.category === "Phone") { tmpMobileData.push(product) }
                    else if (product.category === "Accessory") { tmpAccData.push(product) }
                }
                this.setState({ _mobilesData: tmpMobileData });
                this.setState({ _accessoriesData: tmpAccData });

                //! Handling search request:
                let searchValue = (this.state.isSearch) ? queryString.parse(this.props.location.search).q : "";
                if (this.state.isSearch) {
                    for (const mobile of tmpMobileData) {
                        if ((mobile.title).toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
                            this.state.productsArr.push(mobile);
                        }
                    }
                    for (const accessory of tmpAccData) {
                        if ((accessory.title).toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
                            this.state.productsArr.push(accessory);
                        }
                    }
                }
            })
    }

    //* Listener to filter choosing: 
    onChangePriceFilter = (event) => {
        if (event.target.name === "300" || event.target.name === "300 - 600" || event.target.name === "600") {
            let tmpFil = this.state.priceFil;
            if (event.target.checked) {
                tmpFil++;
                this.setState({ priceFil: tmpFil }, () => { this.filterData(event) })
            }
            else {
                tmpFil--;
                this.setState({ priceFil: tmpFil }, () => { this.filterData(event) })
            }
        }
        if (event.target.name === "0 - 2" || event.target.name === "3 - 4" || event.target.name === "5") {
            let tmpFil = this.state.rateFil;
            if (event.target.checked) {
                tmpFil++;
                this.setState({ rateFil: tmpFil }, () => { this.filterData(event) })
            }
            else {
                tmpFil--;
                this.setState({ rateFil: tmpFil }, () => { this.filterData(event) })
            }
        }
        if (event.target.name === "iphone" || event.target.name === "android") {
            let tmpFil = this.state.typeFil;
            if (event.target.checked) {
                tmpFil++;
                this.setState({ typeFil: tmpFil }, () => { this.filterData(event) })
            }
            else {
                tmpFil--;
                this.setState({ typeFil: tmpFil }, () => { this.filterData(event) })
            }
        }
    }

    //* Filter the products according to the chosen methods:
    filterData = (event) => {
        let tmpArr = [];
        if (this.state.priceFil > 1 || this.state.rateFil > 1 || this.state.typeFil > 1) {
            this.setState({ productsArr: [] })
        }
        else if (this.state.priceFil === 0 && this.state.rateFil === 0 && this.state.typeFil === 0) {
            this.setState({ productsArr: this.props._data });
        }
        else {
            for (const product of this.state.productsArr) {
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
                        if (product.rating <= 2) {
                            tmpArr.push(product);
                        }
                    }
                    if (event.target.name === "3 - 4") {
                        if (product.rating >= 3 && product.rating <= 4) {
                            tmpArr.push(product);
                        }
                    }
                    if (event.target.name === "5") {
                        if (product.rating === 5) {
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
            this.setState({ productsArr: tmpArr });
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
                    tmpArr = (this.state.productsArr).sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    break;
            }
            this.setState({ productsArr: tmpArr });
        });
    }

    //* Change page:
    paginate = (pageNum) => {
        this.setState({ currentPage: pageNum })
    }

    render() {
        //! Get current products
        const indexOfLastProd = this.state.currentPage * this.state.productsPerPage
        const indexOfFirstProd = indexOfLastProd - this.state.productsPerPage
        const currentProducts = this.state.productsArr.slice(indexOfFirstProd, indexOfLastProd)

        return (
            <div className="mainStyle">
                <h2> {(this.props.title) ? (this.props.title) : "Search results for: " + queryString.parse(this.props.location.search).q} </h2>
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
                <div className="container">
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
                        <div className="row">
                            {currentProducts.map((product, index) => (
                                <div className="cards col-lg-4 col-md-6" key={index}>
                                    <Link to={"/product/" + product.title.replace(/\s/g, '')} style={{ textDecoration: 'none' }}>
                                        <CatalogProduct img={product.img} title={product.title} rating={product.rating} desc={product.desc} price={product.price} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <Pagination productsPerPage={this.state.productsPerPage} totalProducts={this.state.productsArr.length} paginate={this.paginate} />
                    </div>
                </div>
            </div>
        )
    }
}
