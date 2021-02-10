export default function formatPrecent(num1,num2) {
    let myPrec;
    if (num1 != null && num2 !=null) {
        myPrec = num2/(num1/100)
        myPrec = Number(myPrec.toFixed(0)).toLocaleString()
        return `%${myPrec}`
    } else if (num1 !== null && num2 === null) {
        myPrec = num1;
        myPrec = Number(myPrec.toFixed(0)).toLocaleString()
        return `%${myPrec}`
    }
}