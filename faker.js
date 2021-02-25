// import faker from 'faker'
var faker = require('faker')

let brandArr=["MAC","IL MAKIAGE","LORIAL PARIS","BOBBI BROWN"];
let categoryArr=["Lips","Eyes","Face"];
let stockArr=["in stock","sold out"];

function generateProduct () {
  var arrayAllProduct = []
  for (var id = 0; id < 50; id++) {
    let imgSrc = [faker.image.image(),faker.image.image()]
    let headerProduct = faker.name.title()
    let brandProduct = brandArr[Math.floor(Math.random()*4)]
    let priceProduct = faker.commerce.price()
    let discountProduct = faker.commerce.price()
    let categoryProduct =  categoryArr[Math.floor(Math.random()*3)]
    let macatProduct = faker.random.number()
    let shortExplanation = faker.random.words()
    let explanationproduct = faker.random.words()
    let stockProduct = stockArr[Math.floor(Math.random()*2)]
    let moreInfoProduct = faker.random.words()
    let similarProducts = faker.random.words()
    let buyNum = faker.random.number()
    

    arrayAllProduct.push({
        "imgSrc":imgSrc,
      "headerProduct": headerProduct,
      "brandProduct": brandProduct,
      "priceProduct": priceProduct,
      "discountProduct":discountProduct,
      "categoryProduct": categoryProduct,
      "macatProduct": macatProduct,
      "shortExplanation": shortExplanation,
      "explanationproduct":explanationproduct,
      "stockProduct": stockProduct,
      "moreInfoProduct": moreInfoProduct,
      "similarProducts": similarProducts,
      "buyNum": buyNum
    })
  }
  return { "arrayAllProduct": arrayAllProduct }
}

module.exports = generateProduct