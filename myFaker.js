const faker = require('faker');

module.exports = ()=>{
    let data=[];
    for(let i=0 ; i<20 ; i++){
        let product ={
            name:faker.name.findName(),
            urlImg:[faker.image.image(),faker.image.image(),faker.image.image(),faker.image.image(),faker.image.image()],
            price:faker.commerce.price(),
            stars:Math.ceil(Math.random()* 4.9),
            jsonPlace:i,
            type:faker.name.findName(),
            onSale:(Math.ceil(Math.random()* 4.9)>2)?false:true
            }
        data.push(product);
        }
        return { "data": data }
    }