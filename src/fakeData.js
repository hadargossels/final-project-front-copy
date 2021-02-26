const fake = require("faker");

function fakeData() {
  let products = [];
  let blogs = [];

  for (let i = 0; i <= 50; i++) {
    let src = fake.image.avatar();
    let name = fake.commerce.productName();
    let price = fake.commerce.price();
    let stars = fake.finance.routingNumber();
    let sale = fake.commerce.price();
    let numberCoupon = fake.vehicle.vin();
    let coupon = 0.25;
    let category = fake.commerce.productAdjective();
    let subcategory = fake.commerce.productAdjective();
    let ship = fake.commerce.price();
    let text = fake.commerce.productDescription();
    let RelatedProducts = [
      fake.commerce.productName(),
      fake.commerce.productName(),
      fake.commerce.productName(),
    ];
    let date = fake.date.past();
    let title = fake.name.title();

    products.push({
      id: i,
      src: src,
      name: name,
      price: price,
      stars: stars,
      sale: sale,
      numberCoupon: numberCoupon,
      coupon: coupon,
      category: category,
      subcategory: subcategory,
      ship: ship,
      text: text,
      RelatedProducts: RelatedProducts,
    });

    blogs.push({
      name: name,
      title: title,
      text: text,
      date: date,
      src: src,
    });
  }
  return { products: products, blogs: blogs };
}
module.exports = fakeData;
