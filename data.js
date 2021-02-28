var faker = require('faker')

function generateData() {
    var mobiles = []
    var accessories = []

    for (var id = 0; id < 50; id++) {
        var title = faker.commerce.productName()
        var img = faker.image.technics()
        var type = "android"
        var stars = Math.floor(Math.random() * 6);
        var about = faker.commerce.productDescription()
        var price = faker.commerce.price()
        var description = faker.commerce.productDescription()

        mobiles.push({
            "id": id,
            "title": title,
            "img": img,
            "type": type,
            "stars": stars,
            "desc": about,
            "price": price,
            "isMobile": true,
            "longDesc": description
        })
        accessories.push({
            "id": id,
            "title": title,
            "img": img,
            "type": type,
            "stars": stars,
            "desc": about,
            "price": price,
            "isMobile": false
        })
    }
    return { "_mobilesData": mobiles, "_accessoriesData": accessories }
}
module.exports = generateData