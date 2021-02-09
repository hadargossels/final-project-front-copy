

import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom';

import './HomeElement.css'



let el={ img: "/images/cake8-1.jpeg",
            alt: "PHOTO",
            id: 8,
            description:"מקרונים במגוון טעמים מנגו/תות/אפרסק",
            title: "מקרונים",
            priceSmall: "",
            priceBig: 20,
            milk: true ,
            parve: false ,
            fruit: true,
            glutenFree: true,
            shugerFree: false,
            stars: 3,
            new:true }





export default class HomeElement extends Component {

    constructor(props){
        super(props)
        this.state={
            
        }
     this.price=this.price.bind(this)

    }

    price(el){

        if(el.priceSmall)
            return `מחיר: ${el.priceBig}₪ גדול  /${el.priceSmall}₪  קטן `
        else
            return `  מחיר:  ${el.priceBig}₪`
        
    }

    render() {
        return (
            <div>
                
            <div className="myElement">
                {el.new&&<p id="banner">New</p>}
                <img src={el.img} alt={el.alt}></img>
                <div className="detailsElement">
            
                    <button type="button" class="btn btn-success p-0" >
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button type="button" class="btn btn-primary p-0" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                        <i className="fas fa-search-plus"></i>
                    </button>
                    <div>
                        <p>{el.title}</p>
                        <p>{this.price(el)}</p>
                    </div>
                    
                </div>
            </div>


            {/* ////////////////   modal-quick-view   ////////////////////// */}


                <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{textAlign: "right"}}>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close" style={{float: "left"}}>✖</button>
                    <h3 class="modal-title" id="exampleModalLabel">{el.title}</h3>
                        
                    </div>
                    <div class="modal-body">
                        
                        <div class="mb-3">
                            <div className="col-10 col-md-auto smallImge" style={{backgroundImage:`url(${el.img})`}}></div>
                        </div>

                        <div class="mb-3">
                            <h5>{el.description}</h5>
                        </div>
                    
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">סגור</button>
                        <button type="button" class="btn btn-success">הוסף לעגלה </button>
                        <Link to={"/Catalog/"+el.title}><button type="button" class="btn btn-warning" data-bs-dismiss="modal">עבור לדף מוצר</button></Link>
                    </div>
                    </div>
                </div>
                </div>
                {/* ////////////////   modal-quick-view end  ////////////////////// */}


            </div>
        )
    }
}
