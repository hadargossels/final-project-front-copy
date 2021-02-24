let faker = require("faker");
function generetProducts(){
  let storeProducts = []
    let coupons = [];
  for(let i=0;i<50;i++){
    let title = faker.name.title();
    let img = faker.image.image();
    let price =Number( faker.commerce.price());
    let info = faker.lorem.paragraph();
    let inCart= false;
    let  count= 0;
    let total= 0;
    let  sale=faker.random.boolean();;
    let rating = faker.random.number(5);
    let  coupon= faker.random.number({
        'min': 10000,
        'max': 999999
    });
    
    storeProducts.push({
      "id":i,
      "title": title,
      "img": img,
      "price": price,
      "info": info,
      "inCart": inCart,
      "count": count,
      "total": total,
      "sale": sale,
      "rating": rating
    })
    coupons.push({ "coupon":coupon })
    }
  return {"storeProducts":storeProducts , "coupons":coupons};
}
module.exports = generetProducts