import React from 'react'

const Rating = (props) => {
    let starsArr = [];
    for (let i = 1 ; i<=props.rating ; i++){
        starsArr.push(<i key={i} className="fas fa-star"></i>)
    }
    for (let j = 5; j>props.rating ; j--){
        starsArr.push(<i key={j} className="far fa-star"></i>)
    }
    return(
            <span className="text-primary">{starsArr}</span>
    );
}

export default Rating
