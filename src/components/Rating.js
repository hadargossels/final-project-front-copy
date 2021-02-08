
import React from 'react'

const Rating = (props)=>{

        let starsArray=[];

        for(let i=1;i<=props.stars;i++){
            starsArray.push(<i key={i} className="fas fa-star"></i>)
        }
        for(let j=5;j>props.stars;j--){
            starsArray.push(<i key={j} className="far fa-star"></i>)
        }
        return(
            <span className="text-warning">{starsArray}</span>
        )
}
export default Rating