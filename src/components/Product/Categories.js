import React from 'react'

const Categories = (props) => {
    let categories = ''
    for (let platforms of props.platforms){
        categories += platforms + " game"
    }

    return (
        <div className="mb-3 text-center">
            <h5>Categories:</h5>
            <span>{categories}</span>
        </div>
    )
}

export default Categories
