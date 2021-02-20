import React, { Component, createRef} from 'react';
import {Link} from 'react-router-dom';
import Product from './Product.jsx';
import storeItems from './StoreItems.jsx'


class Store extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            category: [
                {name: "bedroom", isChecked: false, subCategory: [
                    {name: "bedding", isChecked: false}, 
                    {name: "blankets", isChecked: false}]
                },
                {name: "bathroom", isChecked: false, subCategory: [
                    {name:"bath towels", isChecked: false}, 
                    {name:"bath accessories", isChecked: false}]
                },
                {name: "living room", isChecked: false, subCategory: [
                    {name:"kitchen towels", isChecked: false}, 
                    {name:"storage", isChecked: false}, 
                    {name:"serving dishes", isChecked: false}]
                }
            ],
            valuePriceSelect: 0,
            valueSortSelect: "",
            store: storeItems
        };

        this.priceRangeRef = createRef();
        this.onSaleRef = createRef();

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
        const storeItems = this.state.store;
        storeItems.forEach(element => {element.display = false;});

        let isDisplayAllItems = true;
        this.state.category.forEach(categoryItem => {        
            const checkedSubCategories = [];

            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.isChecked)
                    checkedSubCategories.push(subCategoryItem.name);
            })
            
            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.isChecked)
                    checkedSubCategories.push(subCategoryItem.name);
            })

            if (checkedSubCategories.length > 0) {
                isDisplayAllItems = false;
                storeItems.forEach(element => {
                    if (checkedSubCategories.includes(element.subcategory)) 
                        element.display = true;
                });
            }
            else if (categoryItem.isChecked) {
                isDisplayAllItems = false;
                storeItems.forEach(element => {
                    if(categoryItem.name === element.category)
                        element.display = true;
                });
            }

        })  

        if(isDisplayAllItems) {
            storeItems.forEach(element => {element.display = true;});
        }
        
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
        this.setState({store: this.state.store});
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
        this.state.store.forEach(element => {
            element.display = true;
        })

        this.setState({category: category, valuePriceSelect: 0});  // TODO: bug - price
    }

    getActualPrice = (product) => {
        return product.price * (1 - product.discount);
    }

    changeSort = (event) => {
        this.setState({valueSortSelect: event.target.value});
        const sortedStore = this.state.store;

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

        this.setState({store: sortedStore});
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
            this.state.store.forEach(element => {
                element.display = element.name.toLowerCase().includes(urlParams.get('q').toLowerCase());
            });
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.handleStoreCategories();
        this.handleSearch();
        this.setState({store: this.state.store});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.pathname.toLowerCase() !== prevProps.location.pathname.toLowerCase()) {
            this.handleStoreCategories();
            this.setState({store: this.state.store});
        }
        
        if (this.props.location.search.toLowerCase() !== prevProps.location.search.toLowerCase()) {
            this.handleSearch();
            this.setState({store: this.state.store});
        }
    }

    getProductsElements = () => {
        return this.state.store.filter(element => element.display).map(productElement => 
            <Product key={productElement.id} productElement={productElement}/>)
    }

    render() {
        return (
            <div className= "container py-5">
                <div className="row">
                    <div className="col-2">
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