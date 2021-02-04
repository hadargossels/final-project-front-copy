import React, { Component } from 'react'
import Catalog from './Catalog';
import './CatalogPage.css'
import {objectsArr} from '../Product/data'


export default class CatalogPage extends Component {

    render() {

        let objCatalog = objectsArr

        return (
            <div className="container">
                <h1 className="text-center py-3">Game Catalog</h1>
                <Catalog arr={objCatalog}/>
            </div>
        )
    }
}

