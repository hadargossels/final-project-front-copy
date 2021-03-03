import React, { Component } from 'react';
import './AddProduct.css';
import { Redirect } from 'react-router-dom';
import {auth, db} from '../../firebase'

class AddProduct extends Component {
    constructor() {
        super()
        this.state = {
            ISBN10: null,
            ISBN13: null,
            title: null,
            format: null,
            pages: null,
            dimensions: null,
            weight: null,
            publisher: null,
            publicationCity: null,
            publicationCountry: null,
            language: null,
            originalPrice: null,
            publicationDate: null,
            author: null,
            artist: null,
            description: null,
        }
    }

    handleForm = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.addProductToDB();
    }

    addProductToDB = () => {
        let fakeHash = Date.now();
        let fakePrice = this.state.originalPrice - 5
        let fakeStars = Math.floor(Math.random() * 5) + 1
        let productDetails = {
            id: fakeHash,
            ISBN10: this.state.ISBN10,
            ISBN13: this.state.ISBN13,
            title: this.state.title,
            format:this.state.format,
            pages: this.state.pages,
            dimensions: this.state.dimensions,
            weight: this.state.weight,
            publisher: this.state.publisher,
            publicationPlace: `${this.state.publicationCity}, ${this.state.publicationCountry}`,
            language: this.state.language,
            price: fakePrice,
            originalPrice: this.state.originalPrice,
            publicationDate: this.state.publicationDate,
            image: "https://via.placeholder.com/150x250",
            author: this.state.author,
            artist: this.state.artist,
            stars: fakeStars,
            quantity: 1,
            description: this.state.description
        }
        db.ref('products/' + fakeHash).set({
            ...productDetails
          })
          .catch((error) => {console.log(error)});
    }

    addToState = (event) => {
        let choiseName = event.target.id
        switch(choiseName) {
            case "productTitle":
                if (event.target.value !== "") {
                    this.setState({
                        title: event.target.value
                    })
                } else {
                    this.setState({
                        title: null
                    })
                }
                break;
            case "isbn10":
                if (event.target.value !== "") {
                    this.setState({
                        ISBN10: event.target.value
                    })
                } else {
                    this.setState({
                        ISBN10: null
                    })
                }
                break;
            case "isbn13":
                if (event.target.value !== "") {
                    this.setState({
                        ISBN13: event.target.value
                    })
                } else {
                    this.setState({
                        ISBN13: null
                    })
                }
                break;
            case "productFormat":
                if (event.target.value !== "") {
                    this.setState({
                        format: event.target.value
                    })
                } else {
                    this.setState({
                        format: null
                    })
                }
                break;
            case "productPages":
                if (event.target.value !== "") {
                    this.setState({
                        pages: event.target.value
                    })
                } else {
                    this.setState({
                        pages: null
                    })
                }
                break;
            case "dimensions":
                if (event.target.value !== "") {
                    this.setState({
                        dimensions: event.target.value
                    })
                } else {
                    this.setState({
                        dimensions: null
                    })
                }
                break;
            case "productWeight":
                if (event.target.value !== "") {
                    this.setState({
                        weight: event.target.value
                    })
                } else {
                    this.setState({
                        weight: null
                    })
                }
                break;
            case "productPublisher":
                if (event.target.value !== "") {
                    this.setState({
                        publisher: event.target.value
                    })
                } else {
                    this.setState({
                        publisher: null
                    })
                }
                break;
            case "productLanguage":
                if (event.target.value !== "") {
                    this.setState({
                        language: event.target.value
                    })
                } else {
                    this.setState({
                        language: null
                    })
                }
                break;
            case "publicationCity":
                if (event.target.value !== "") {
                    this.setState({
                        publicationCity: event.target.value
                    })
                } else {
                    this.setState({
                        publicationCity: null
                    })
                }
                break;
            case "publicationCountry":
                if (event.target.value !== "") {
                    this.setState({
                        publicationCountry: event.target.value
                    })
                } else {
                    this.setState({
                        publicationCountry: null
                    })
                }
                break;
            case "productPrice":
                if (event.target.value !== "") {
                    this.setState({
                        originalPrice: event.target.value
                    })
                } else {
                    this.setState({
                        originalPrice: null
                    })
                }
                break;
            case "publicationDate":
                if (event.target.value !== "") {
                    this.setState({
                        publicationDate: event.target.value
                    })
                } else {
                    this.setState({
                        publicationDate: null
                    })
                }
                break;
            case "productAuthor":
                if (event.target.value !== "") {
                    this.setState({
                        author: event.target.value
                    })
                } else {
                    this.setState({
                        author: null
                    })
                }
                break;
            case "productArtist":
                if (event.target.value !== "") {
                    this.setState({
                        artist: event.target.value
                    })
                } else {
                    this.setState({
                        artist: null
                    })
                }
                break;
            case "productDescription":
                if (event.target.value !== "") {
                    this.setState({
                        description: event.target.value
                    })
                } else {
                    this.setState({
                        description: null
                    })
                }
                break;
            default:
                break;
        }
    }

    render() {

        let sbmtBttn;
        if (this.state.ISBN10 !== null && this.state.ISBN13 !== null && this.state.title !== null && this.state.format !== null && this.state.pages !== null && this.state.dimensions !== null && this.state.weight !== null && this.state.publisher !== null && this.state.publicationCity !== null && this.state.publicationCountry !== null && this.state.language !== null && this.state.originalPrice !== null && this.state.publicationDate !== null && this.state.author !== null && this.state.artist !== null && this.state.description !== null) {
                sbmtBttn =                         
                    <input 
                    type="submit" 
                    value="Add New Product" 
                    className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-800 mb-3 mt-3"
                    />
            } else {
                sbmtBttn =                         
                <input 
                type="submit" 
                value="Add New Product" 
                disabled
                className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 border border-yellow-800 mb-3 mt-3 opacity-50"
                />
            }

        return (
            <main className="addProduct pt-10 pb-10">
                {/* {this.state.errorMessage} */}
                <div className="bg-gray-300 mx-auto w-1/3 text-center text-3xl shadow shadow-md border-4 rounded border-solid border-8 border-gray-400">
                    <h1 className="text-6xl text-yellow-600 py-4 font-medium">Product Details</h1>
                    <form onSubmit={(event) => {this.handleForm(event)}}>
                        <div className="grid gap-y-6 grid-cols-2 grid-rows-10s pb-2">
                            <p  className="pb-4 col-span-2">
                                <label htmlFor="productTitle">Title:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="productTitle" name="productTitle" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p  className="pb-4">
                                <label htmlFor="isbn10">ISBN10:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="isbn10" name="isbn10" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="isbn13">ISBN13:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="isbn13" name="isbn13" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="productFormat">Format:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="productFormat" name="productFormat" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="productPages">Pages:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="productPages" name="productPages" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="dimensions">Dimensions:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="dimensions" name="dimensions" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="productWeight">Weight:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="productWeight" name="productWeight" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="productPublisher">Publisher:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="productPublisher" name="productPublisher" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="productLanguage">Product Language:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="productLanguage" name="productLanguage" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="publicationCity">Publication City:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="publicationCity" name="publicationCity" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="publicationCountry">Publication Country:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="publicationCountry" name="publicationCountry" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="productPrice">Price:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="productPrice" name="productPrice" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="publicationDate">Publication Date:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="publicationDate" name="publicationDate" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="productAuthor">Author:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="productAuthor" name="productAuthor" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4">
                                <label htmlFor="c">Artist:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="text" id="productArtist" name="productArtist" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                            <p className="pb-4 col-span-2">
                                <label htmlFor="productDescription">Description:&nbsp;&nbsp;&nbsp;</label>
                                <br/>
                                <input type="textarea" id="productDescription" name="productDescription" onChange={(event) => {this.addToState(event)}}/>
                            </p>
                        </div>
                        {sbmtBttn}
                    </form>
                </div>
            </main>
        )
    }
}

export default AddProduct;