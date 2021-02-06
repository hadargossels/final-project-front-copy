import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';
import ProductPage from './ProductPage.jsx';
import images from '../images'
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

class Store extends Component {
    storeItems = [
        {   id: 1, 
            name: "Saten sheets",
            description: "Satin bedding is made of 100% combed cotton with a smooth, glossy and pleasant to the touch finish.",
            images: [images.image1_1, images.image1_2, images.image1_3],
            price: 150,
            discount: 0.25,
            stars: 4,
            category: "bedroom",
            subcategory: "bedding",
            inStock: true,
            deliver: true,
            favorite: false 
        },
        {   id: 2, 
            name: "Wool blanket",
            description: "A thick and luxurious wool blanket.",
            images: [images.image2_1, images.image2_2, images.image2_3],
            price: 250,
            discount: 0,
            stars: 3,
            category: "bedroom",
            subcategory: "blankets",
            inStock: true,
            deliver: true,
            favorite: false
        },
        {   id: 3, 
            name: "Bath towel",
            description: "A thick and luxurious bath towel.",
            images: [images.image3_1, images.image3_2, images.image3_3],
            price: 200,
            discount: 0.25,
            stars: 4,
            category: "bathroom",
            subcategory: "towels",
            inStock: true,
            deliver: true,
            favorite: false
        }, 
        {   id: 4, 
            name: "Storage for tea, coffee and sugar",
            description: "Storage for tea, coffee and sugar made of ceramic with a hermetic wooden lid",
            images: [images.image4_1, images.image4_2, images.image4_3],
            price: 225,
            discount: 0.30,
            stars: 4,
            category: "kitchen",
            subcategory: "storage",
            inStock: true,
            deliver: true,
            favorite: false
        }           
    ]

    state = {
        category: [
            {name: "bedroom", isChecked: false, subCategory: [
                {name: "bedding", isChecked: false}, 
                {name: "blankets", isChecked: false}]
            },
            {name: "bathroom", isChecked: false, subCategory: [
                {name:"bath towels", isChecked: false}, 
                {name:"bath accessories", isChecked: false}]
            },
            {name: "kitchen", isChecked: false, subCategory: [
                {name:"kitchen towels", isChecked: false}, 
                {name:"storage", isChecked: false}, 
                {name:"serving dishes", isChecked: false}]
            }
        ],
        valuePriceSelect: 0,
        valueSortSelect: "",
        store: this.storeItems
    };

    setPriceValue = (event) => {
        this.setState({valuePriceSelect: event.target.value});
    }

    filterCategory = (event) => {
        let category = this.state.category
        category.forEach(categoryItem => {
            if (categoryItem.name === event.target.value)
                categoryItem.isChecked = event.target.checked
        })
        this.setState({category: category})
    }

    filterSubcategory = (event) => {
        let category = this.state.category
        category.forEach(categoryItem => {
            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.name === event.target.value)
                    subCategoryItem.isChecked = event.target.checked
            })
        })
        this.setState({category: category})
    }

    displayFilteredItems = () => {
        let numChecked = 0;
        let filteredItems = [];
        this.state.category.forEach(categoryItem => {            
            let checkedSubCategories = [];
            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.isChecked)
                    checkedSubCategories.push(subCategoryItem.name)
            })

            if (checkedSubCategories.length > 0) {
                numChecked += checkedSubCategories.length;
                filteredItems.push(...this.storeItems.filter(element => checkedSubCategories.includes(element.subcategory)));
            }
            else if (categoryItem.isChecked) {
                numChecked += 1;
                filteredItems.push(...this.storeItems.filter(element => categoryItem.name === element.category));
            }

        })

        if (numChecked === 0)
            filteredItems = this.storeItems;
        
        if (this.state.valuePriceSelect > 0){
            filteredItems = filteredItems.filter(element => (element.price * (1 - element.discount)) <= this.state.valuePriceSelect);
        }
        
        this.setState({store: filteredItems});
    }

    resetFilter = (event) => {
    }

    changeSort = (event) => {
        this.setState({valueSortSelect: event.target.value});
        const sortedStore = this.state.store;

        switch (event.target.value){
            case 'low': {
                sortedStore.sort(function (a, b) {
                    return a.actualPrice - b.actualPrice;
                  });
                break;
            }
            case 'high': {
                sortedStore.sort(function (a, b) {
                    return b.actualPrice - a.actualPrice;
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

    getSubCategories = () => {
        let subCategories = [];
        this.state.category.forEach(categoryItem => {
            categoryItem.subCategory.forEach(subCategoryItem => {
                subCategories.push(subCategoryItem.name)
            })
        })
        return subCategories;
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
                        {this.getSubCategories().map((element, index) => (
                            <div className="form-check" key={index}>
                                <input className="form-check-input" type="checkbox" value={element} onChange={this.filterSubcategory}></input>
                                <label className="form-check-label" htmlFor={Object.keys(element)}>
                                    {element}
                                </label>
                            </div>
                        ))}

                        <br></br>
                        <h6>Price</h6> 
                        <label htmlFor="priceRange" className="form-label"></label>
                        <input type="range" className="form-range" id="priceRange" min="0" max="1000" step="10" onInput={this.setPriceValue}></input>
                        <output>{this.state.valuePriceSelect}</output>

                        <div className="mt-3">
                        <input className="btn btn-outline-primary btn-sm" type="button" value="Apply" onClick={this.displayFilteredItems}></input>
                        <input className="btn btn-outline-primary btn-sm mx-2" type="button" value="Reset" onClick={this.resetFilter}></input>
                        </div>
                        
                    </div>
                    <div className="col-10 justify-content-center">
                        <div className="row">
                            {this.state.store.map(productElement => 
                                <Product key={productElement.id} productElement={productElement}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Store;


{/* <div className= "container py-3 d-flex flex-row">
                <div className="p-2" style={{width:"25%", backgroundColor: "red"}}>
                    <h1>hello</h1>
                </div>
                <div className="p-2 row justify-content-center" style={{width:"75%", backgroundColor: "green"}}>
                    {this.state.store.map(productElement => 
                        <Product 
                            key={productElement.id}
                            productElement={productElement} 
                        />)}
                </div>
            </div> */}


            // {this.state.category.map((element, index) => (
                            
            //     <div className="form-check" key={index}>
            //         <input className="form-check-input" type="checkbox" value="" id={Object.keys(element)}></input>
            //         <label className="form-check-label" for={Object.keys(element)}>
            //             {Object.keys(element)}
            //         </label>
            //     </div>
            // ))}

                    // for (let i = 0; i < n-1; i++){ 
        //     for (let j = 0; j < n-i-1; j++){
        //         if ((sortedStore[j].price * (1-sortedStore[j].discount)) > (sortedStore[j+1].price * (1-sortedStore[j+1].discount))) 
        //         { 
        //             let temp = sortedStore[j]; 
        //             sortedStore[j] = sortedStore[j+1]; 
        //             sortedStore[j+1] = temp; 
        //         }
        //     }
        // }