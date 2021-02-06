import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';
import storeItems from './StoreItems.jsx'


class Store extends Component {
    

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
        valuePriceSelect: {value: 0},
        valueSortSelect: "",
        store: storeItems
    };

    setPriceValue = (event) => {
        this.setState({valuePriceSelect: {value: event.target.value}});
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
        let numChecked = 0;
        let filteredItems = [];
        this.state.category.forEach(categoryItem => {            
            let checkedSubCategories = [];
            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.isChecked)
                    checkedSubCategories.push(subCategoryItem.name);
            })

            if (checkedSubCategories.length > 0) {
                numChecked += checkedSubCategories.length;
                filteredItems.push(...storeItems.filter(element => checkedSubCategories.includes(element.subcategory)));
            }
            else if (categoryItem.isChecked) {
                numChecked += 1;
                filteredItems.push(...storeItems.filter(element => categoryItem.name === element.category));
            }

        })
        
        if (numChecked === 0)
            filteredItems = storeItems;
        
        if (this.state.valuePriceSelect.value > 0){
            filteredItems = filteredItems.filter(element => (element.price * (1 - element.discount)) <= this.state.valuePriceSelect.value);
        }
        
        this.setState({store: filteredItems});
    }

    resetFilter = () => {
        // setting all categories and sub categories elements checked = false
        const elements = document.getElementsByClassName("form-check-input");
        Array.from(elements).forEach((element) => {
            element.checked = false;
        });

        // setting all categories and sub categories state checked = false
        let category = this.state.category
        category.forEach(categoryItem => {
            categoryItem.isChecked = false;

            categoryItem.subCategory.forEach(subCategoryItem => {
                subCategoryItem.isChecked = false;
            })
        })

        // reset price to be 0
        document.getElementById("priceRange").value = 0;
        let valuePriceSelect = this.state.valuePriceSelect
        valuePriceSelect.value = 0;
        this.setState({category: category, valuePriceSelect: valuePriceSelect});  // TODO: bug - price

        // display all items (no item it filtered)
        this.displayFilteredItems();
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
                        <output> {this.state.valuePriceSelect.value}</output>

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