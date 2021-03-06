import React, { Component, createRef} from 'react';
import {Link} from 'react-router-dom';
import Product from './Product.jsx';
import axios from 'axios';


class Store extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            category: [],
            valuePriceSelect: 0,
            valueSortSelect: "",
        };

        this.priceRangeRef = createRef();
        this.onSaleRef = createRef();

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        
        axios.get('http://localhost:5000/products')
        .then( response => {
            this.setState({ products: response.data }, () => {
                this.handleStoreCategories();
                this.handleSearch();
                this.setState({products: this.state.products});
            })

            const categories = []
            response.data.forEach(item => {
                const category = categories.filter(category => {return category.name === item.category});
                if (category.length === 0) {
                    categories.push({name: item.category, isChecked: false, subCategory: [{name: item.subcategory, isChecked: false}]});
                }
                else {
                    const subcategory = category[0].subCategory.filter(subCategory => {return subCategory.name === item.subcategory})
                    if (subcategory.length === 0) {
                        category[0].subCategory.push({name: item.subcategory, isChecked: false});
                    }
                }
            });

            this.setState({ category: categories })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.pathname.toLowerCase() !== prevProps.location.pathname.toLowerCase()) {
            this.handleStoreCategories();
            this.setState({products: this.state.products});
        }
        
        if (this.props.location.search.toLowerCase() !== prevProps.location.search.toLowerCase()) {
            this.handleSearch();
            this.setState({products: this.state.products});
        }
    }

    setPriceValue = (event) => {
        this.setState({valuePriceSelect: event.target.value});
    }

    filterCategory = (event) => {
        let category = this.state.category
        category.forEach(categoryItem => {
            if (categoryItem.name === event.target.value)
                categoryItem.isChecked = event.target.checked;
        })
        this.setState({category: category})
    }

    filterSubcategory = (event) => {
        let category = this.state.category
        category.forEach(categoryItem => {
            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.name === event.target.value)
                    subCategoryItem.isChecked = event.target.checked;
            })
        })
        this.setState({category: category})
    }

    displayFilteredItems = () => {
        let checkedCategories = [];
        let checkedSubCategories = [];
        this.state.category.forEach(categoryItem => {
            if (categoryItem.isChecked)
                checkedCategories.push(categoryItem.name)

            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.isChecked)
                    checkedSubCategories.push(subCategoryItem.name)
            })
        })

        const storeItems = this.state.products; 
        storeItems.forEach(element => {
            if (checkedCategories.length === 0 && checkedSubCategories.length === 0)
                element.display = true;
            else if (checkedCategories.length === 0 && checkedSubCategories.length > 0) {
                element.display = checkedSubCategories.includes(element.subcategory);
            }
            else if (checkedCategories.length > 0 && checkedSubCategories.length === 0) {
                element.display = checkedCategories.includes(element.category);
            }
            else {
                element.display = checkedCategories.includes(element.category) && checkedSubCategories.includes(element.subcategory);
            }
        });
        
        if (this.onSaleRef.current.checked){
            storeItems.forEach(element => {
                element.display &= element.discount > 0;
            })
        }
        
        if (this.state.valuePriceSelect > 0) {
            storeItems.forEach(element => {
                element.display = element.price * (1 - element.discount) <= this.state.valuePriceSelect;
            });
        }
    }

    applyFilter = () => {
        this.displayFilteredItems();
        this.setState({products: this.state.products});
    }

    resetFilter = () => {
        // setting all categories and sub categories elements checked = false
        const elements = document.getElementsByClassName("form-check-input");
        Array.from(elements).forEach((element) => {
            element.checked = false;
        });

        this.onSaleRef.current.isChecked = false;

        // setting all categories and sub categories state checked = false
        let category = this.state.category
        category.forEach(categoryItem => {
            categoryItem.isChecked = false;

            categoryItem.subCategory.forEach(subCategoryItem => {
                subCategoryItem.isChecked = false;
            })
        })

        // reset price scroller element to be 0
        this.priceRangeRef.current.value = 0;

        // display all items (no item it filtered)
        this.state.products.forEach(element => {
            element.display = true;
        })

        this.setState({category: category, valuePriceSelect: 0});  // TODO: bug - price
    }

    getActualPrice = (product) => {
        return product.price * (1 - product.discount);
    }

    changeSort = (event) => {
        this.setState({valueSortSelect: event.target.value});
        const sortedStore = this.state.products;

        switch (event.target.value){
            case 'low': {
                sortedStore.sort(function (a, b) {
                    return a.price * (1 - a.discount) - b.price * (1 - b.discount);
                });
                break;
            }
            case 'high': {
                sortedStore.sort(function (a, b) {
                    return b.price * (1 - b.discount) - a.price * (1 - a.discount);
                });
                break;
            }
            default: {
                sortedStore.sort(function (a, b) {
                    return a.id - b.id;
                  });
                break;
            }
        }

        this.setState({products: sortedStore});
    }

    getAllSubCategories = () => {
        let subCategories = [];
        this.state.category.forEach(categoryItem => {
            categoryItem.subCategory.forEach(subCategoryItem => {
                subCategories.push(subCategoryItem.name)
            })
        })
        return subCategories;
    }

    getAllCategoriesUrl = () => {
        let categories = [];
        this.state.category.forEach(categoryItem => {
            categories.push(categoryItem.name.replace(/\s/g, ''))
        });
        return categories;
    }

    handleStoreCategories() {    
        // set sale reference if the location.onSale exists   
        this.onSaleRef.current.checked |= this.props.location.onSale != null;

        const category = this.state.category
        const elements = document.getElementsByClassName("form-check-input");
        // setting the category (if exists) to be true
        let transformedPath = this.props.location.pathname.split('/')
        if (transformedPath.length > 2 && this.getAllCategoriesUrl().includes(transformedPath[2])) {
            Array.from(elements).forEach(element => {   
                if (element.value.replace(/\s/g, '') === transformedPath[2]) {
                    element.checked = true;
                    category.forEach(categoryItem => {
                        categoryItem.isChecked = categoryItem.name === element.value;
                    })
                }
                else {
                    element.checked = false;
                }
            });

        }

        this.displayFilteredItems();
    }

    handleSearch() {
        const urlParams = new URLSearchParams(this.props.location.search);
        if (urlParams.get('q')) {
            this.state.products.forEach(element => {
                element.display = element.name.toLowerCase().includes(urlParams.get('q').toLowerCase());
            });
        }
    }

    getProductsElements = () => {
        return this.state.products.filter(element => element.display).map(productElement => 
            <Product key={productElement.id} productElement={productElement}/>)
    }

    render() {
        return (
            <div className= "container py-5">
                <div className="row">
                    <div className="col-2 pr-5">
                        <h5>Sort</h5>
                        <div className="form-group mb-4">
                            <select className="form-control form-control-sm" value={this.state.valueSortSelect} onChange={this.changeSort}>
                                <option value=""> </option>
                                <option value="low">Price: low to high</option>
                                <option value="high">Price: high to low</option>
                            </select>
                        </div>

                        <h5>Filter</h5>

                        <h6>Category</h6>
                        {this.state.category.map((element, index) => (
                            <div className= "form-check" key={index}>
                                <input className="form-check-input" type="checkbox" value={element.name} onChange={this.filterCategory}></input>
                                <label className="form-check-label" htmlFor={Object.keys(element.name)}>
                                    {element.name}
                                </label>
                            </div>
                        ))}

                        <br></br>
                        <h6>Sub Category</h6>    
                        {this.getAllSubCategories().map((element, index) => (
                            <div className="form-check" key={index}>
                                <input className="form-check-input" type="checkbox" value={element} onChange={this.filterSubcategory}></input>
                                <label className="form-check-label" htmlFor={Object.keys(element)}>
                                    {element}
                                </label>
                            </div>
                        ))}

                        <br></br>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="onSaleCheck" ref={this.onSaleRef}></input>
                            <label className="form-check-label" htmlFor="onSaleCheck"><h6>On Sale</h6></label>
                        </div>

                        <br></br>
                        <h6>Price</h6> 
                        <label htmlFor="priceRange" className="form-label"></label>
                        <input type="range" className="form-range" id="priceRange" min="0" max="1000" step="10" onInput={this.setPriceValue} ref={this.priceRangeRef}></input>
                        <output> {this.state.valuePriceSelect}</output>

                        <div className="mt-3">
                            <Link to="/store" className="btn btn-outline-primary btn-sm" type="button" onClick={this.applyFilter}>Apply</Link>
                            <Link to="/store" className="btn btn-outline-primary btn-sm mx-2" type="button" onClick={this.resetFilter}>Reset</Link>
                        </div>
                        
                    </div>
                    <div className="col-10 justify-content-center">
                        <div className="row">
                            {this.getProductsElements()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Store;