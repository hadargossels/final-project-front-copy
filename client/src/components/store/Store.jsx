import React, { useRef, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Product from './Product.jsx';
import { useStore } from '../../context/StoreContext';
import axios from 'axios';


export default function Store(props) {
    const { products } = useStore();
    const [ displayProducts, setDisplayProducts ] = useState([]);

    const { categories } = useStore();
    const [ displayCategories, setDisplayCategories ] = useState([]);

    const [ valuePriceSelect, setValuePriceSelect ] = useState(0);
    const [ valueSortSelect, setValueSortSelect ] = useState('');
    
    const priceRangeRef = useRef();
    const onSaleRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);

        const displayProducts = products.map(product => ({...product, display: true}));
        setDisplayProducts(displayProducts);
        
        const dbCategories = categories.filter(category => {return category.parent === null});
        const displayCategoriess = [];
        dbCategories.forEach(dbCategory => {
            let subCategory = [];
            categories.forEach(category => {
                if (category.parent === dbCategory.name) 
                    subCategory.push({name: category.name, isChecked: false});
            })
            displayCategories.push({name: dbCategory.name, isChecked: false, subCategory: subCategory});
        });
        setDisplayCategories(displayCategoriess);
        
    }, [products, categories])

    useEffect(() => {
        handleStoreCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.location.pathname])

    useEffect(() => {
        const urlParams = new URLSearchParams(props.location.search);
        if (urlParams.get('q')) {
            const searchProducts = products;
            let productsUpdated = false;
            searchProducts.forEach(element => {
                const shouldDisplay = element.name.toLowerCase().includes(urlParams.get('q').toLowerCase());
                if (element.display !== shouldDisplay) {
                    element.display = shouldDisplay;
                    productsUpdated = true;
                }
            });
            
            if (productsUpdated)
                setDisplayProducts([...searchProducts]);
        }
    }, [props.location.search, products])

    const handleStoreCategories = () => {
        // set sale reference if the location.onSale exists   
        onSaleRef.current.checked = onSaleRef.current.checked | props.location.onSale != null;

        // setting the category filter if the path is a category
        const checkedCategory = [...displayCategories];
        const elements = document.getElementsByClassName("form-check-input");
        const transformedPath = props.location.pathname.split('/');

        const categoriesRegex = new RegExp( getAllCategoriesUrl().join( "|" ), "i");
        if (transformedPath.length > 2 && categoriesRegex.test(transformedPath[2])) {
            resetFilter();
            Array.from(elements).forEach(element => {
                console.log(element.value.replace(/\s/g, '').toLowerCase() + ' ' + transformedPath[2].toLowerCase());
                if (element.value.replace(/\s/g, '').toLowerCase() === transformedPath[2].toLowerCase()) {
                    console.log(element);
                    element.checked = true;
                    checkedCategory.forEach(categoryItem => {
                        // categoryItem.isChecked = categoryItem.name === element.value;
                        if (categoryItem.name === element.value)
                            categoryItem.isChecked = true;
                        else {
                            categoryItem.isChecked = false;
                        }
                    })
                }
                else {
                    element.checked = false;
                }
            });
            setDisplayCategories(checkedCategory);
            console.log("--->" + checkedCategory);
        }

        displayFilteredItems();
    }

    const setPriceValue = (event) => {
        setValuePriceSelect(event.target.value);
    }

    const filterCategory = (event) => {
        displayCategories.forEach(categoryItem => {
            if (categoryItem.name === event.target.value)
                categoryItem.isChecked = event.target.checked;
        })
    }

    const filterSubcategory = (event) => {
        displayCategories.forEach(categoryItem => {
            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.name === event.target.value)
                    subCategoryItem.isChecked = event.target.checked;
            })
        })
    }

    const displayFilteredItems = () => {
        axios.get(`${process.env.REACT_APP_PROXY}/products?filter={"onSale":true, "price":100}`)
        .then(res => {
            console.log(res.data);
        });


        // get the inputs filters that are checked
        let checkedCategories = [];
        let checkedSubCategories = [];
        displayCategories.forEach(categoryItem => {
            if (categoryItem.isChecked)
                checkedCategories.push(categoryItem.name);

            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.isChecked)
                    checkedSubCategories.push(subCategoryItem.name);
            })
        })

        //set the displayed items according to the checked imputs
        const storeItems = [...products]; 
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
        
        //add filter 'on sale' to the earlier products
        if (onSaleRef.current.checked){
            storeItems.forEach(element => {
                element.display &= element.discount > 0;
            })
        }
        
        //add filter 'price' to the earlier products
        if (valuePriceSelect > 0) {
            storeItems.forEach(element => {
                element.display &= element.price * (1 - element.discount) <= valuePriceSelect;
            });
        }

        setDisplayProducts(storeItems);
    }

    const resetFilter = () => {
        // set all categories and sub categories elements checked = false
        const elements = document.getElementsByClassName("form-check-input");
        Array.from(elements).forEach((element) => {
            element.checked = false;
        });

        //set 'on sale' input to false
        onSaleRef.current.isChecked = false;

        // set all categories and sub categories state checked = false
        displayCategories.forEach(categoryItem => {
            categoryItem.isChecked = false;

            categoryItem.subCategory.forEach(subCategoryItem => {
                subCategoryItem.isChecked = false;
            })
        })

        // reset price scroller element to be 0
        priceRangeRef.current.value = 0;

        // display all items (no item it filtered)
        const displayProducts = products;
        displayProducts.forEach(element => {
            element.display = true;
        })

        setDisplayProducts(displayProducts);
        setDisplayCategories(displayCategories) ;
        setValuePriceSelect(0);  
    }

    //set sort
    const changeSort = (event) => {
        setValueSortSelect(event.target.value);
        const sortedStore = products;

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

        setDisplayProducts(sortedStore);
    }

    const getAllSubCategories = () => {
        let subCategories = [];
        displayCategories.forEach(categoryItem => {
            categoryItem.subCategory.forEach(subCategoryItem => {
                subCategories.push(subCategoryItem.name);
            })
        })
        return subCategories;
    }

    const getAllCategoriesUrl = () => {
        let categories = [];
        displayCategories.forEach(categoryItem => {
            categories.push(categoryItem.name.replace(/\s/g, ''));
        });
        return categories;
    }

    return (
        <div className= "container py-5">
            <div className="row">
                <div className="col-3 pr-5">
                    <h5>Sort</h5>
                    <div className="form-group mb-4">
                        <select className="form-control form-control-sm" value={valueSortSelect} onChange={changeSort}>
                            <option value=""> </option>
                            <option value="low">Price: low to high</option>
                            <option value="high">Price: high to low</option>
                        </select>
                    </div>

                    <h5>Filter</h5>

                    <br></br>
                    <h6>Sub Category</h6>    
                    {getAllSubCategories().map((element, index) => (
                        <div className="form-check" key={index}>
                            <input className="form-check-input" type="checkbox" value={element} onChange={filterSubcategory}></input>
                            <label className="form-check-label" htmlFor={Object.keys(element)}>
                                {element}
                            </label>
                        </div>
                    ))}

                    <br></br>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="onSaleCheck" ref={onSaleRef}></input>
                        <label className="form-check-label" htmlFor="onSaleCheck"><h6>On Sale</h6></label>
                    </div>

                    <br></br>
                    <h6>Price</h6> 
                    <label htmlFor="priceRange" className="form-label"></label>
                    <input type="range" className="form-range" id="priceRange" min="0" max="1000" step="10" onInput={setPriceValue} ref={priceRangeRef}></input>
                    <output> {valuePriceSelect}</output>

                    <div className="mt-3">
                        <Link to="/store" className="btn btn-outline-primary btn-sm" type="button" onClick={displayFilteredItems}>Apply</Link>
                        <Link to="/store" className="btn btn-outline-primary btn-sm mx-2" type="button" onClick={resetFilter}>Reset</Link>
                    </div>
                    
                </div>
                <div className="col-9 justify-content-center">
                    <div className="row">
                        {displayProducts.filter(element => element.display).map(productElement =>
                            <Product key={productElement.id} productElement={productElement}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
