import React, { Component } from 'react'
import Catalog from './Catalog';
import './CatalogPage.css'
import data from '../Product/data'


export default class CatalogPage extends Component {

    render() {

        let objCatalog = data

        return (
            <div>
                <h1 className="text-center py-3">Game Catalog</h1>
                <Catalog arr={objCatalog}/>
            </div>
        )
    }
}

