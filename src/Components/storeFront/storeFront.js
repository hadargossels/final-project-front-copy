import './storeFront.css';
import React, { Component } from 'react';
// import data from '../../data.json';
import ItemView from './itemView/itemView';
import Filters from './filters/filters';
import Pagination from './Pagination/Pagination';
import queryString from 'query-string';
import axios from 'axios';


class StoreFront extends Component {
    constructor(props) {
        super(props);
        this.searchVal = queryString.parse(props.location.search)
        this.state = {
            // products: data.products,
            products: null,
            language:"",
            format:"",
            publisher:"",
            sort:"",
            originalProducts: null,
        };
    }

    componentDidMount = () => {
        
        let self = this

        axios.get('http://localhost:3000/products')
        .then(function(response) {
            self.setState({
                products: response.data,
                originalProducts: response.data
            })
        })
        .catch( function(error) {
            console.log(error)
        })
    }



    filterLanguage = (event) => {
        let products = (this.state.products !== this.state.originalProducts) ? [...this.state.products]: this.state.originalProducts
        if (event.target.value === "") {
            this.setState({
                language:event.target.value, 
                products: this.state.originalProducts
            })
        } else {
            let filteredProducts = products.filter(product => product.language === event.target.value)
            if (!filteredProducts.length) {
                this.setState({
                    language:event.target.value,
                    products: this.state.originalProducts.filter(product => product.language === event.target.value)
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
        let products = (this.state.products !== this.state.originalProducts) ? [...this.state.products]: this.state.originalProducts
        if (event.target.value === "") {
            this.setState({
               format:event.target.value, 
               products: this.state.originalProducts
            })
        } else {
            let filteredProducts = products.filter(product => product.format === event.target.value)
            if (!filteredProducts.length) {
                this.setState({
                    format:event.target.value,
                    products: this.state.originalProducts.filter(product => product.format === event.target.value)
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
        let products = (this.state.products !== this.state.originalProducts) ? [...this.state.products]: this.state.originalProducts
        if (event.target.value === "") {
            this.setState({
                publisher:event.target.value, 
                products: this.state.originalProducts
            })
        } else {
            this.setState({
                publisher:event.target.value,
                products: products.filter(product => product.publisher === event.target.value)
            })
        }
    }

    sortPrices = (event) => {
        let products = (this.state.products !== this.state.originalProducts) ? [...this.state.products]: this.state.originalProducts
        this.setState({
            sort:event.target.value,
            products: products.sort((a,b) => {
                if(event.target.value === "lowest") {
                    if(Number(a.price) > Number(b.price)) {
                        return 1
                    } else {
                        return -1
                    }
                } else if (event.target.value === "highest") {
                    if(Number(a.price) < Number(b.price)) {
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

        let catalogObj = [];

        let catalogueLength = 0;

        if(this.state.products && this.state.products.length) {
            catalogueLength = this.state.products.length
            catalogObj = [...this.state.products]
            let toSearch = (this.searchVal.q)
            if(toSearch && typeof(toSearch) === "string") {
                toSearch = toSearch.toLowerCase()
                catalogObj = catalogObj.filter(obj => (obj.title.toLowerCase().includes(toSearch)))
                catalogueLength = catalogObj.length
            }
    
            let myUrl = window.location.href.split('catalogue/');
    
            if(myUrl[1] === "new") {
                catalogObj = catalogObj.filter(obj => (obj.new === "yes"))
                catalogueLength = catalogObj.length
            };
    
            if(myUrl[1] === "specials") {
                catalogObj = catalogObj.filter(obj => (obj.special === "yes"))
                catalogueLength = catalogObj.length
            };
    
            if(myUrl[1] === "top") {
                catalogObj = catalogObj.filter(obj => (obj.top === "yes"))
                catalogueLength = catalogObj.length
            };

            return(    
                <main className="storeFront">
                    <div className="filters">
                        <Filters 
                            count={catalogueLength}
                            language={this.state.language}
                            format={this.state.format}
                            publisher={this.state.publisher}
                            sort={this.state.sort}
                            filterLanguage={this.filterLanguage}
                            filterFormat={this.filterFormat}
                            filterPublisher={this.filterPublisher}
                            sortPrices={this.sortPrices}
                        >
                        </Filters>
                    </div>
                    <div className="itemsView">
                        <ItemView 
                            products={catalogObj}
                            addToCart={this.tryAddToCart}
                        >
                        </ItemView>
                        <br/>
                        <Pagination/>
                        <br/>
                    </div>
                </main>
            )
        } else {
            return (
                <main className="storeFront">
                    <div className="filters">
                        <Filters 
                            count="0"
                            language={this.state.language}
                            format={this.state.format}
                            publisher={this.state.publisher}
                            sort={this.state.sort}
                            filterLanguage={this.filterLanguage}
                            filterFormat={this.filterFormat}
                            filterPublisher={this.filterPublisher}
                            sortPrices={this.sortPrices}
                        >
                        </Filters>
                    </div>
                    <div className="itemsView">
                        <ItemView 
                            products={catalogObj}
                            addToCart={this.tryAddToCart}
                        >
                        </ItemView>
                        <br/>
                    </div>
                </main>
            )
        }
    }
}

export default StoreFront;