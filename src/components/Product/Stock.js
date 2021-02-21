import React from 'react'

const Stock = (props) => {
    if (props.stock){
        return (
            <h6 className="text-center text-warning">Currently in stock!</h6>
        )
    }
    else{
        return <div></div>
    }
}

export default Stock
