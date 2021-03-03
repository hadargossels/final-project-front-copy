import React, { Component } from 'react'
import queryString from 'query-string'
import {connect} from 'react-redux'
import CatalogContainer from '../../components/Catalog/CatalogContainer';
import './CatalogPage.css'
import Spinner from '../../components/Spinner/Spinner';
import { getProducts} from '../../actions'


class CatalogPage extends Component {
    constructor(props){
        super(props)
        this.searchVal = queryString.parse(props.location.search)
        this.filterBtn = props.match.params.search
    }
    componentDidMount(){
        this.props.getProducts()
    }

    render() {
        let objCatalog = [...this.props.allProducts]
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
                {!this.props.allProducts? <Spinner/> :
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

const mapStateToProps = state => ({
    allProducts: state.products.allProducts
})

export default connect(mapStateToProps, {getProducts})(CatalogPage)