

// employees.js
var faker = require('faker')
function generateDB () {
  var products = []
  for (var id = 0; id < 50; id++) {
    var img=faker.image.image()
    var description = faker.lorem.sentence()
    var title = faker.lorem.words()
    var priceSmall = faker.commerce.price()
    var bool= faker.random.boolean()

    products.push({

      "img": img,
      "img2": img,
      "alt": "PHOTO",
      "id": id,
      "description": description,
      "title": title,
      "priceSmall": priceSmall,
      "priceBig":priceSmall,
      "milk":bool,
      "parve": bool ,
      "fruit": bool,
      "glutenFree": bool,
      "shugerFree": bool,
      "stars": 5,
      "new":bool

    })
  }

  var coupons = []
  for (var id = 0; id < 50; id++) {
    var coupon = {}
    coupon.id = id+1
    coupon.serialNumber = faker.finance.mask()
    coupon.discountPercentage = faker.random.number(1,100)
    coupon.used = false
    
    coupons.push(coupon)
  }

  return { "products": products, "coupons" : coupons }
}
module.exports = generateDB