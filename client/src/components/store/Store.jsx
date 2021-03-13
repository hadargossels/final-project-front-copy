import React, { useRef, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Product from './Product.jsx';
import {firebasedb} from '../../firebase';


export default function Store(props) {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [valuePriceSelect, setValuePriceSelect] = useState(0);
    const [valueSortSelect, setValueSortSelect] = useState('');
    
    const priceRangeRef = useRef();
    const onSaleRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        firebasedb.ref('products').get()
        .then( snapshot => {
            const products = [];
            for (let key in snapshot.val()) {
                products.push(snapshot.val()[key]);
            }
            const displayProducts = products.map(product => ({...product, display: true}));
            setProducts(displayProducts);

            const categories = [];
            displayProducts.forEach(item => {
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
            setCategory(categories);
        })
    }, [])

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
                setProducts([...searchProducts]);
        }
    }, [props.location.search, products])

    const handleStoreCategories = () => {
        // set sale reference if the location.onSale exists   
        onSaleRef.current.checked |= props.location.onSale != null;

        const checkedCategory = [...category];
        const elements = document.getElementsByClassName("form-check-input");
        // setting the category (if exists) to be true
        const transformedPath = props.location.pathname.split('/');
        if (transformedPath.length > 2 && getAllCategoriesUrl().includes(transformedPath[2])) {
            resetFilter();
            Array.from(elements).forEach(element => {   
                if (element.value.replace(/\s/g, '') === transformedPath[2]) {
                    element.checked = true;
                    checkedCategory.forEach(categoryItem => {
                        categoryItem.isChecked = categoryItem.name === element.value;
                    })
                }
                else {
                    element.checked = false;
                }
            });
            setCategory(checkedCategory);
        }

        displayFilteredItems();
    }

    const setPriceValue = (event) => {
        setValuePriceSelect(event.target.value);
    }

    const filterCategory = (event) => {
        category.forEach(categoryItem => {
            if (categoryItem.name === event.target.value)
                categoryItem.isChecked = event.target.checked;
        })
    }

    const filterSubcategory = (event) => {
        category.forEach(categoryItem => {
            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.name === event.target.value)
                    subCategoryItem.isChecked = event.target.checked;
            })
        })
    }

    const displayFilteredItems = () => {
        let checkedCategories = [];
        let checkedSubCategories = [];
        category.forEach(categoryItem => {
            if (categoryItem.isChecked)
                checkedCategories.push(categoryItem.name);

            categoryItem.subCategory.forEach(subCategoryItem => {
                if (subCategoryItem.isChecked)
                    checkedSubCategories.push(subCategoryItem.name);
            })
        })

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
        
        if (onSaleRef.current.checked){
            storeItems.forEach(element => {
                element.display &= element.discount > 0;
            })
        }
        
        if (valuePriceSelect > 0) {
            storeItems.forEach(element => {
                element.display &= element.price * (1 - element.discount) <= valuePriceSelect;
            });
        }

        setProducts(storeItems);
    }

    const resetFilter = () => {
        // setting all categories and sub categories elements checked = false
        const elements = document.getElementsByClassName("form-check-input");
        Array.from(elements).forEach((element) => {
            element.checked = false;
        });

        onSaleRef.current.isChecked = false;

        // setting all categories and sub categories state checked = false
        category.forEach(categoryItem => {
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

        setProducts(displayProducts);
        setCategory(category) ;
        setValuePriceSelect(0);  
    }

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

        setProducts(sortedStore);
    }

    const getAllSubCategories = () => {
        let subCategories = [];
        category.forEach(categoryItem => {
            categoryItem.subCategory.forEach(subCategoryItem => {
                subCategories.push(subCategoryItem.name);
            })
        })
        return subCategories;
    }

    const getAllCategoriesUrl = () => {
        let categories = [];
        category.forEach(categoryItem => {
            categories.push(categoryItem.name.replace(/\s/g, ''));
        });
        return categories;
    }

    const getProductsElements = () => {
        return products.filter(element => element.display).map(productElement =>
            <Product key={productElement.id} productElement={productElement}/>)
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

                    <h6>Category</h6>
                    {category.map((element, index) => (
                        <div className= "form-check" key={index}>
                            <input className="form-check-input" type="checkbox" value={element.name} onChange={filterCategory}></input>
                            <label className="form-check-label" htmlFor={Object.keys(element.name)}>
                                {element.name}
                            </label>
                        </div>
                    ))}

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
                        {getProductsElements()}
                    </div>
                </div>
            </div>
        </div>
    );
}
