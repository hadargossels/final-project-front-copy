import React, { Component } from 'react'
import axios from 'axios'
import queryString from 'query-string'

import CatalogContainer from '../../components/Catalog/CatalogContainer';
import './CatalogPage.css'

export default class CatalogPage extends Component {
    constructor(props){
        super(props)
        this.searchVal = queryString.parse(props.location.search)
        this.filterBtn = props.match.params.search
        this.state= {allProducts:""}
    }
    componentDidMount(){
        axios.get("http://localhost:3000/objectsArr").then(allProducts =>{
            this.setState({allProducts:allProducts.data})
        })
    }

    render() {
        let objCatalog = [...this.state.allProducts]
        let toSearch = (this.searchVal.q)

        if (toSearch){
            toSearch = toSearch.toLowerCase()
            objCatalog = objCatalog.filter(gameObj =>(gameObj.name.toLowerCase().includes(toSearch)))
        }
        if (this.filterBtn === "new"){
            objCatalog = objCatalog.filter(gameObj =>(gameObj.new))
        }
        else if (this.filterBtn === "discount"){
            objCatalog = objCatalog.filter(gameObj =>(gameObj.discount))
        }
        else if (this.filterBtn === "bestsellers"){
            objCatalog = objCatalog.filter(gameObj =>(gameObj.bestseller))
        }

        return (
            <div>
                {!this.state.allProducts? <div>loading</div> :
                    <div className="container">
                        <p>{this.exampleProp}</p>
                        <h1 className="text-center py-3">Game Catalog</h1>
                        <CatalogContainer arr={objCatalog}/>
                    </div>
                }
            </div>
        )
    }
}