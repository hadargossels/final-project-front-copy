let faker = require('faker')

function generateData () {
  let comments = []
  for (let id = 1; id < 50; id++) {
    let date = faker.date.soon()
    let comment = faker.lorem.sentence()
    let postId = faker.random.number(10)
    let userId = faker.random.number(49)
    comments.push({
      "postId": postId,
      "commentId": id,
      "date": date,
      "comment": comment,
      "userId": userId
    })
  }
  let posts = []
  for (let id = 1; id < 10; id++) {
    let title = faker.lorem.words()
    let content = faker.lorem.paragraph()
    let date = faker.date.past()
    let comments = faker.random.number(10)
    let src = faker.image.image()
    let userId = faker.random.number(49)
    posts.push({
        "postId": id,
        "title": title,
        "content":  content,
        "date": date,
        "src": src,
        "userId": userId
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
        "productId": id,
        "src": src,
        "price": price,
        "name": name,
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
    let categoryId = faker.random.number(6)
    let brandId = faker.random.number(4)
    let colorId = faker.random.number(10)
    let priceRangeId = faker.random.number(4)
    let date = faker.date.past()
    let featured = faker.random.number()
    store.push({
      "productId": id,
      "categoryId": categoryId,
      "brandId": brandId,
      "colorId": colorId,
      "priceRangeId": priceRangeId,
      "date": date,
      "featured": featured
    })
  }

  let users = []
for (let id = 1; id < 50; id++) {
  let firstName = faker.name.firstName()
  let lastName = faker.name.lastName()
  let email = faker.internet.email()
  let country = faker.address.country()
  let city = faker.address.city()
  let addressStreet = faker.address.streetAddress()
  let zip = faker.address.zipCode()
  let phone = faker.phone.phoneNumber()
  let role = faker.random.arrayElement(['admin', 'client'])
  let active = faker.random.boolean()
  users.push({
    "id": id,
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "country": country,
    "city": city,
    "address": addressStreet,
    "zip": zip,
    "phone": phone,
    "role": role,
    "active": active,
  })
}

let faq = []
for (let id = 1; id < 50; id++) {
  let title = faker.lorem.sentence(10)
  let content = faker.lorem.sentences(5)
  faq.push({
    "qustId": id,
    "title": title,
    "content": content
  })
}

  
  return { "comments": comments, "posts":posts, "product": product, "store": store, "users": users, "faq": faq}
}
module.exports = generateData

