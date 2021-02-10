import React, { Component } from 'react'
import Catalog from './Catalog';
import './CatalogPage.css'
import {objectsArr} from '../Product/data'
import queryString from 'query-string'

export default class CatalogPage extends Component {
    constructor(props){
        super(props)
        this.searchVal = queryString.parse(props.location.search)
        this.filterBtn = props.match.params.search
    }

    render() {
        let objCatalog = [...objectsArr]
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
            <div className="container">
                <p>{this.exampleProp}</p>
                <h1 className="text-center py-3">Game Catalog</h1>
                <Catalog arr={objCatalog}/>
            </div>
        )
    }
}