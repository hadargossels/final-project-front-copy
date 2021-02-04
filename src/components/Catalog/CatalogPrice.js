import React from 'react'

export const CatalogPrice = (props) => {
    if (props.discount)
    return (
        <div>
             <span className="text-danger h4  text-decoration-line-through me-2">${props.price.toFixed(2)}</span>
             <span className="text-success h3">${(props.discount).toFixed(2)}</span> 
        </div>
    )
    else{
        return(  
        <span className=" h3 text-danger">${props.price.toFixed(2)}</span>
        )
    }
}
