import React from 'react'
import './ShoppingCart.css'
import myProducts from '../../prod.json'

let arrProd=JSON.parse(localStorage.getItem('products')) || [];

export default function ShoppingCart() {
        return (
            <div>
                {
                arrProd.map((obj)=>{

                    let results=myProducts.filter((prod)=>{
                        return prod.Image===obj.Image
                    })[0];
                    
                        return(

                            <div className="border">
                                <div className="row">
                                    <div className="col-5">
                                        <img className="popImg" src={results.Image} alt="..."/>
                                    </div>
                                    <div className="col-7">
                                        <div><b>{results.Title}</b></div><br/>
                                        <div className="text-start">{obj.Item} x ${results.Price}</div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                    
                    
                    }
                    
                  {
                    !arrProd.length && <div>No products have been added to cart</div>
                  }
            </div>
                    
    )
}
