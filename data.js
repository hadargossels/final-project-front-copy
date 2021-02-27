let faker = require('faker')

function generateData () {
  let comments = []
  for (let id = 1; id < 50; id++) {
    let name = faker.name.firstName()
    let date = faker.date.soon()
    let comment = faker.lorem.sentence()
    let postId = faker.random.number(10)
    comments.push({
      "postId": postId,
      "id": id,
      "name": name,
      "date": date,
      "comment": comment
    })
  }
  let blog = []
  for (let id = 1; id < 10; id++) {
    let title = faker.lorem.words()
    let content = faker.lorem.paragraph()
    let date = faker.date.past()
    let comments = faker.random.number(10)
    let src = faker.image.image()
    blog.push({
        "id": id,
        "title": title,
        "content":  content,
        "date": date,
        "comments": comments,
        "src": src
    })
  }
  let product = []
  for (let id = 1; id < 50; id++) {
    let src = faker.image.image()
    let price = faker.commerce.price(1,40)
    let name = faker.commerce.productName()
    let gallery1 = faker.image.image()
    let gallery2 = faker.image.image()
    let gallery3 = faker.image.image() 
    let description = faker.commerce.productDescription()
    let stock = "IN STOCK"
    let rating = faker.random.number(5)
    let raters = faker.random.number()
    let related1 = faker.image.image()
    let related2 = faker.image.image()
    let related3 = faker.image.image()
    product.push({
        "src": src,
        "price": price,
        "name": name,
        "id": id,
        "gallery1": gallery1,
        "gallery2": gallery2,
        "gallery3": gallery3,
        "description": description,
        "stock": stock,
        "rating": rating,
        "raters": raters,
        "related1": related1,
        "related2": related2,
        "related3": related3
    })
  }

  let store = []
  for (let id = 1; id < 50; id++) {
    let src = faker.image.image()
    let category = faker.random.arrayElement(["pens","pencils","diaries","notebooks","school","folders"])
    let brand = faker.random.arrayElement(["brandA","brandB","brandC","brandD"])
    let color = faker.commerce.color()
    let price = faker.commerce.price(1,50)
    let priceRange = faker.random.arrayElement(["0-10","11-20","21-30","31-40","41-50"])
    let name = faker.commerce.productName()
    let description = faker.commerce.productDescription()
    let date = faker.date.past()
    let featured = faker.random.number()
    store.push({
      "src": src,
      "category": category,
      "brand": brand,
      "color": color,
      "price": price,
      "priceRange": priceRange,
      "name": name,
      "description": description,
      "id": id,
      "date": date,
      "featured": featured
    })
  }
  return { "comments": comments, "blog":blog, "product": product, "store": store }
}
module.exports = generateData