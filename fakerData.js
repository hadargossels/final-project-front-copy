var faker = require('faker')

function generateData() {
    var products = []

    for (var id = 0; id < 50; id++) {
        var title = faker.commerce.productName()
        var img = faker.image.technics()
        var type = (Math.random() > 0.5) ? "android" : "iphone"
        var rating = Math.floor(Math.random() * 6);
        var about = faker.commerce.productDescription()
        var price = faker.commerce.price()
        var description = faker.commerce.productDescription()
        var category = (Math.random() > 0.5) ? "Phone" : "Accessory"
        var models = [faker.lorem.words(), faker.lorem.words(), faker.lorem.words()]
        var modelsPrices = [price, faker.commerce.price(), faker.commerce.price()]
        var colors = [faker.commerce.color(), faker.commerce.color(), faker.commerce.color()]

        products.push({
            "id": id,
            "category": category,
            "title": title,
            "img": img,
            "type": type,
            "rating": rating,
            "desc": about,
            "price": price,
            "longDesc": description,
            "models": models,
            "modelsPrices": modelsPrices,
            "colors": colors
        })
    }
    return { "products": products }
}
module.exports = generateData