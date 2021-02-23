export function lowToHigh(a,b){
    let priceA = a.price
    let priceB = b.price
    if (a.discount){
        priceA = a.discount
    }
    if (b.discount){
        priceB = b.discount
    }
    return (priceA - priceB);
}

export function highToLow(a,b){
    let priceA = a.price
    let priceB = b.price
    if (a.discount){
        priceA = a.discount
    }
    if (b.discount){
        priceB = b.discount
    }
    return (priceB - priceA)
}

export function ratingOrder(a,b){
    return (b.rating-a.rating)
}

export function alphabetOrder(a,b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB){
        comparison = 1;
    }
    else if (nameA < nameB){
        comparison = -1
    }
    return comparison;
}

export function newestDate(a,b){
    let a_date = new Date(a.date)
    let b_date = new Date(b.date)
    return (b_date-a_date)
}