// https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d
// https://rawgit.com/Marak/faker.js/master/examples/browser/index.html

const faker = require('faker')

function generateDB () {

    let coupons = []
    let dictCoupons = {}
    let products = []

    for (let id = 0 ; id < 50 ; id++) {

        dictCoupons[faker.vehicle.vrm()] = Number((faker.finance.mask()/10000).toFixed(2))

        let product = {}

        product.id = id
        product.name = faker.company.bsAdjective()
        product.img = [faker.image.image()]
        product.title = faker.commerce.productName()
        product.subtitle = faker.commerce.productDescription()

        product.price=5
        product.rating=3.5
        product.stock=true
        product.discount=false
        product.discountPercentage=0.2

        products.push(product)
    }

    coupons.push(dictCoupons)

    return { "coupons": coupons, "products": products }

}

module.exports = generateDB
