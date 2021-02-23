var faker = require('faker')
function generateObjectsArr () {
  let objectsArr = []
  let couponArr = []
  let usersArr = []
  let postsArr = []

  for (var id = 0; id < 20; id++) {

    function createProduct(){
      let name = faker.commerce.productName()
      let img = faker.image.imageUrl()
      let stock = faker.random.boolean()
      let is_new = faker.random.boolean()
      let bestseller = faker.random.boolean()
      let num1 = Number(faker.commerce.price(10,100,2))
      let num2 = Number(faker.commerce.price(10,100,2))
      if (num2 < num1){num1=false}
      let rating = faker.random.number()%5 + 1
      let shortDescription = [faker.lorem.sentence(),faker.lorem.sentence(),faker.lorem.sentence(),faker.lorem.sentence()]
      let platform = [faker.random.arrayElement(["PlayStation4", "Nintendo Switch", "Computer"])]
      let about_it = faker.lorem.paragraphs(15,"\n\n")

      objectsArr.push({
        "id": id,
        "name": name,
        "img": img,
        "imgNarrow": img,
        "imgSmall": img,
        "stock":stock,
        "new":is_new,
        "bestseller":bestseller,
        "discount":num1,
        "price":num2,
        "rating":rating,
        "shortDescription":shortDescription,
        "platforms":platform,
        "about":about_it
      })
    }

    function createCoupon(){
      let code = faker.internet.password(8)
      let couponDiscount = faker.random.number({
        'min': 5,
        'max': 75,
      });

      couponArr.push({
        "id": id,
        "code": code,
        "couponDiscount":couponDiscount
      })
    }

    function createUser(){
      let username = faker.internet.userName()
      let password = faker.internet.password(8)

      usersArr.push({
        "id": id,
        "username": username,
        "password":password
      })
    }

    function createPost(){
      let title = faker.lorem.sentence()
      let date = faker.date.between("01/01/2019","02/22/2021")
      let img = faker.image.imageUrl()
      let blogtext = faker.lorem.paragraphs(15,"\n\n")
      let bottomType = faker.random.arrayElement(["","picture"])

      postsArr.push({
        "id": id,
        "title":title,
        "date": (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear(),
        "img":img,
        "blogtext":blogtext,
        "bottomType":bottomType,
        "bottomContent":img
      })
    }

    createProduct()
    createCoupon() 
    createUser()
    createPost()
    
  }
  return { "objectsArr": objectsArr , "coupons":couponArr , "users":usersArr, "posts":postsArr}
}
module.exports = generateObjectsArr