import React, { Component } from 'react'
import Catalog from './Catalog';
import './CatalogPage.css'

export default class CatalogPage extends Component {

    render() {

        let objCatalog = [{name:"Game1",img:"/img/catalog1.jpg",price:60, rating:4, platforms:["PlayStation4"]},{name:"Game2",img:"/img/catalog2.jpg",price:40, rating:5, platforms:["Nintendo Switch"]},{name:"Game3",img:"/img/catalog3.jpg",price:55, rating:2,platforms:["Nintendo Switch"]},{name:"Game4",img:"/img/catalog4.jpg",price:28,rating:5,platforms:["Computer"]},{name:"Game5",img:"/img/catalog5.jpg",price:75,rating:4,platforms:["Nintendo Switch"]},{name:"Game6",img:"/img/catalog1.jpg",price:30.5,rating:1,platforms:["Nintendo Switch"]},{name:"Game7",img:"/img/catalog2.jpg",price:60.99,rating:3,platforms:["PlayStation4"]},{name:"Game8",img:"/img/catalog3.jpg",price:60,rating:4,platforms:["Nintendo Switch"]}]


        return (
            <div>
                <h1 className="text-center py-3">Game Catalog</h1>
                <Catalog arr={objCatalog}/>
            </div>
        )
    }
}

