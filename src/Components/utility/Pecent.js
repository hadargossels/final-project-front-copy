export default function formatPrecent(num1,num2) {
    if (num1 != null && num2 !=null) {
        let myPrec = num2/(num1/100)
        myPrec = Number(myPrec.toFixed(0)).toLocaleString()
        return `%${myPrec}`
    } 
}