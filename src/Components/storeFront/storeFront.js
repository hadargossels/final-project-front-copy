import './storeFront.css';
import React, { Component } from 'react';
import data from '../../data.json';
import ItemView from '../itemView/itemView';
import Filters from '../filters/filters';
import Pagination from '../Pagination/Pagination';
import queryString from 'query-string';


class StoreFront extends Component {
    constructor(props) {
        super(props);
        this.searchVal = queryString.parse(props.location.search)
        this.state = {
            products: data.products,
            language:"",
            format:"",
            publisher:"",
            sort:"",
        };
    }

    filterLanguage = (event) => {
        let products = (this.state.products !== data.products) ? [...this.state.products]: data.products
        if (event.target.value === "") {
            this.setState({
                language:event.target.value, 
                products: data.products
            })
        } else {
            let filteredProducts = products.filter(product => product.language === event.target.value)
            if (!filteredProducts.length) {
                this.setState({
                    language:event.target.value,
                    products: data.products.filter(product => product.language === event.target.value)
                })
            } else {
                this.setState({
                    language:event.target.value,
                    products: products.filter(product => product.language === event.target.value)
                })
            }
        }
    }

    filterFormat = (event) => {
        let products = (this.state.products !== data.products) ? [...this.state.products]: data.products
        if (event.target.value === "") {
            this.setState({
               format:event.target.value, 
               products: data.products
            })
        } else {
            let filteredProducts = products.filter(product => product.format === event.target.value)
            if (!filteredProducts.length) {
                this.setState({
                    format:event.target.value,
                    products: data.products.filter(product => product.format === event.target.value)
                })
            } else {
                this.setState({
                    format:event.target.value,
                    products: products.filter(product => product.format === event.target.value)
                })
            }
        }
    }

    filterPublisher =(event) => {
        let products = (this.state.products !== data.products) ? [...this.state.products]: data.products
        if (event.target.value === "") {
            this.setState({
                publisher:event.target.value, 
                products: data.products
            })
        } else {
            this.setState({
                publisher:event.target.value,
                products: products.filter(product => product.publisher === event.target.value)
            })
        }
    }

    sortPrices = (event) => {
        let products = (this.state.products !== data.products) ? [...this.state.products]: data.products
        this.setState({
            sort:event.target.value,
            products: products.sort((a,b) => {
                if(event.target.value === "lowest") {
                    if(a.price > b.price) {
                        return 1
                    } else {
                        return -1
                    }
                } else if (event.target.value === "highest") {
                    if(a.price < b.price) {
                        return 1
                    } else {
                        return -1
                    }
                }
                return true;
            })
        })
    }

    tryAddToCart = () => {
        this.props.addToCart(true)
    }

    render () {
        let catalogObj = [...this.state.products]
        let toSearch = (this.searchVal.q)
        if(toSearch && typeof(toSearch) === "string") {
            toSearch = toSearch.toLowerCase()
            catalogObj = catalogObj.filter(obj => (obj.title.toLowerCase().includes(toSearch)))
        }

        let myUrl = window.location.href.split('catalogue/');

        if(myUrl[1] === "new") {
            catalogObj = catalogObj.filter(obj => (obj.new === "yes"))
        };

        if(myUrl[1] === "specials") {
            catalogObj = catalogObj.filter(obj => (obj.special === "yes"))
        };

        if(myUrl[1] === "top") {
            catalogObj = catalogObj.filter(obj => (obj.top === "yes"))
        };

        return(    
            <main className="storeFront">
                <div className="filters">
                    <Filters count={this.state.products.length}
                    language={this.state.language}
                    format={this.state.format}
                    publisher={this.state.publisher}
                    sort={this.state.sort}
                    filterLanguage={this.filterLanguage}
                    filterFormat={this.filterFormat}
                    filterPublisher={this.filterPublisher}
                    sortPrices={this.sortPrices}
                    ></Filters>
                </div>
                <div className="itemsView">
                    <ItemView 
                    products={catalogObj}
                    addToCart={this.tryAddToCart}
                    ></ItemView>
                    <br/>
                    <Pagination/>
                    <br/>
                </div>
            </main>
        )
    }
}

export default StoreFront;