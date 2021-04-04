

import React, { Component } from 'react'
import { Link} from 'react-router-dom';

import './HomeElement.css'



export default class HomeElement extends Component {

    constructor(props){
        super(props)
        this.state={
            
        }
     this.popRef = React.createRef()
     this.popRef2 = React.createRef()

     this.price=this.price.bind(this)
     this.setInLocalStorage=this.setInLocalStorage.bind(this)
     this.popUp=this.popUp.bind(this)
    }

    price(el){

        if(el.priceSmall)
            return `מחיר: ${el.priceBig}₪ גדול  /${el.priceSmall}₪  קטן `
        else
            return `  מחיר:  ${el.priceBig}₪`
        
    }

    //////////////////////      add product to the cart     ///////////////////////////////////

    async setInLocalStorage(e){

        let flag=false
        let storage=JSON.parse(localStorage.getItem("cartStorage")||"[]")

            for (const item of storage) {
                if(item.id===this.props.el.id && this.props.el.priceBig===item.price){
                    item.count++
                    flag=true
                }
            }
            if(!flag){
                    storage.push({id:this.props.el.id,count:1,title:this.props.el.title,img:this.props.el.img,price:this.props.el.priceBig,size:"גדול"})
            }
        
            localStorage.setItem("cartStorage",JSON.stringify(storage))
            this.popUp(e)
            this.props.updatItemsFromLocalStorage()
    }

    popUp(e) {
        
        let popup
        if(e.target.id==="myPopup")
            popup = this.popRef.current
        else
            popup = this.popRef2.current

        popup.classList.toggle("show");
        setTimeout(() => {
            popup.classList.toggle("show");
        }, 2000);
      }
//////////////////////      add product to the cart   end  ///////////////////////////////////

    render() {
        return (
            <div>
                
            <div className="myElement">
                {this.props.el.new&&<p id="banner">New</p>}
                <img src={this.props.el.img} alt={this.props.el.alt}></img>
                <div className="detailsElement">
                    <div>
                        <button type="button" className="btn btn-success p-0 popup"  id="myPopup" onClick={(e)=>this.setInLocalStorage(e)}>
                            <i className="fas fa-shopping-cart " id="myPopup"></i><p className="popuptext" ref={this.popRef} id="myPopup">המוצר הוסף לעגלה!</p>
                        </button>
                        
                        <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target= {`#id${this.props.el.id}`}data-bs-whatever="@mdo" style={{backgroundColor:"rgb(238,76,125)",color:"white"}}>
                            <i className="fas fa-search-plus"></i>
                        </button>
                    </div>
                    <div className="textElm">
                        <p>{this.props.el.title}</p>
                        <p>{this.price(this.props.el)}</p>
                    </div>
                    
                </div>
            </div>


            {/* ////////////////   modal-quick-view   ////////////////////// */}


                <div className="modal fade" id={`id${this.props.el.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{textAlign: "right"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close" style={{float: "left"}}>✖</button>
                    <h3 className="modal-title" id="exampleModalLabel">{this.props.el.title}</h3>
                        
                    </div>
                    <div className="modal-body">
                        
                        <div className="mb-3">
                            <div className="col-10 col-md-auto smallImge" style={{backgroundImage:`url(${this.props.el.img})`}}></div>
                        </div>

                        <div className="mb-3">
                            <h5>{this.props.el.description}</h5>
                        </div>
                    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">סגור</button>
                        <button type="button" className="btn btn-success popup" id="myPopupModal" onClick={(e)=>this.setInLocalStorage(e)} >הוסף לעגלה<p className="popuptext"  ref={this.popRef2}>המוצר הוסף לעגלה!</p> </button>
                        <Link to={"/Catalog/"+this.props.el.title}><button type="button" className="btn btn-warning" data-bs-dismiss="modal">עבור לדף מוצר</button></Link>
                    </div>
                    </div>
                </div>
                </div>
                {/* ////////////////   modal-quick-view end  ////////////////////// */}


            </div>
        )
    }
}
