import React from 'react'

const Categories = (props) => {
    let categories = props.platforms.join(" game, ")
    categories+=" game"

    return (
        <div className="mb-3 text-center">
            <span className="h5 mx-2">Categories:</span>
            <span>{categories}</span>
        </div>
    )
}

export default Categories
