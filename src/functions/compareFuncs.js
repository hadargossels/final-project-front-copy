export function lowToHigh(a,b){
    return (a.price - b.price);
}

export function highToLow(a,b){
    return (b.price - a.price)
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