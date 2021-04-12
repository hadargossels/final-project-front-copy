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
    let src = faker.image.imageUrl()
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
    let src = faker.image.imageUrl()
    let price = faker.commerce.price(1,40)
    let name = faker.commerce.productName()
    let gallery1 = faker.image.imageUrl()
    let gallery2 = faker.image.imageUrl()
    let gallery3 = faker.image.imageUrl() 
    let description = faker.commerce.productDescription()
    let stock = "IN STOCK"
    let rating = faker.random.number(5)
    let raters = faker.random.number()
    let related1 = faker.image.imageUrl()
    let related2 = faker.image.imageUrl()
    let related3 = faker.image.imageUrl()
    let category = faker.random.arrayElement(["pens","pencils","diaries","notebooks","school","folders"])
    let brand = faker.random.arrayElement(["brandA","brandB","brandC","brandD"])
    let color = faker.commerce.color()
    let priceRange = faker.random.arrayElement(["0-10","11-20","21-30","31-40","41-50"])
    let date = faker.date.past()
    let featured = faker.random.number()
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
    let src = faker.image.imageUrl()
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

  
  return { "comments": comments, "blog":blog, "product": product, "store": store, "users": users}
}
module.exports = generateData