var faker = require('faker')
function generateObjectsArr () {
  var objectsArr = []
  
  for (var id = 0; id < 20; id++) {
    var name = faker.commerce.productName()
    var img = faker.image.imageUrl()
    var stock = faker.random.boolean()
    var is_new = faker.random.boolean()
    var bestseller = faker.random.boolean()
    var num1 = faker.random.number()%100
    var num2 = faker.random.number()%100
    if (num2 < num1){
      num1=false;
    }
    var rating = faker.random.number()%5 + 1
    var shortDescription = [faker.lorem.sentence(),faker.lorem.sentence(),faker.lorem.sentence(),faker.lorem.sentence()]
    var platform = [faker.random.arrayElement(["PlayStation4", "Nintendo Switch", "Computer"])]
    var about_it = faker.lorem.paragraphs(15)

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
  return { "objectsArr": objectsArr }
}
module.exports = generateObjectsArr