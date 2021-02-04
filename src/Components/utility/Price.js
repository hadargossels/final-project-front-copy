export default function formatPrice(num) {
    if (num != null) {
        let myPrice = Number(num.toFixed(1)).toLocaleString()
        return `$${myPrice} `
    } 
}