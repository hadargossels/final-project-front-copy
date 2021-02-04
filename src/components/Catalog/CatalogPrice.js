import React from 'react'

export const CatalogPrice = (props) => {
    if (props.discount)
    return (
        <div>
             <h4 className=" text-danger  text-decoration-line-through me-2">${props.price.toFixed(2)}</h4>
             <h3 className=" text-success h3">${(props.discount).toFixed(2)}</h3> 
        </div>
    )
    else{
        return(  
        <h3 className="pricetag  text-danger">${props.price.toFixed(2)}</h3>
        )
    }
}
