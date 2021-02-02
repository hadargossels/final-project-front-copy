export default function formatPrice(num) {
    let myPrice = Number(num.toFixed(1)).toLocaleString()
    return `$${myPrice} `
}