// import faker from  './node_modules/faker/';

const faker = require('faker');

function generateProducts() {
    let products = []
    let posts = []
    let postComments = []

    for(let id = 0; id < 20; id++) {
        let ISBN10 = faker.finance.account([10])
        let ISBN13 = faker.finance.account([13])
        let title = faker.lorem.sentence(([5]))
        let format = faker.random.arrayElement(["Paperback","Hardcover","Single Issue"])
        let pages = faker.random.number({min:85, max:800})
        let dimensions = `${faker.random.number({min:100, max:200})} x ${faker.random.number({min:100, max:200})} x ${faker.finance.amount(7,50,2)}mm`
        let weight = `${faker.finance.amount(150,3000,3)}g`
        let publisher = faker.random.arrayElement(["Marvel Comics","Malpaso Editorial","Pie International Co., Ltd.","Shueisha/Tsai Fong Books","Image Comics","Dynamite Entertainment","DC Comics","Dark Horse Comics"])
        let publicationPlace = `${faker.address.city()}, ${faker.address.country()}`
        let language = faker.random.arrayElement(["English","Japanese","Spanish"])
        let price = faker.finance.amount(10,150,4)
        let originalPrice = faker.finance.amount(10,150,4)
        let publicationDate = `${faker.random.number({min:1, max:28})} ${faker.date.month()}, ${faker.random.number({min:2000, max:2020})}`
        let image = faker.image.imageUrl(150,250)
        let author = faker.name.findName()
        let artist = faker.name.findName()
        let stars = faker.random.number({min:1, max:5})
        let quantity = "1"
        let special = faker.random.arrayElement(["no","yes"])
        let newThing = faker.random.arrayElement(["no","yes"])
        let top = faker.random.arrayElement(["no","yes"])
        let description = faker.lorem.paragraph([2])

        if (Number(price) > Number(originalPrice)) {
            price = originalPrice;
        }

        products.push({
            "id": id,
            "ISBN10": ISBN10,
            "ISBN13": ISBN13,
            "title": title,
            "format": format,
            "pages": pages,
            "dimensions": dimensions,
            "weight": weight,
            "publisher": publisher,
            "publicationPlace": publicationPlace,
            "language": language,
            "price": price,
            "originalPrice": originalPrice,
            "publicationDate": publicationDate,
            "image": image,
            "author": author,
            "artist": artist,
            "stars": stars,
            "quantity": quantity,
            "special": special,
            "new": newThing,
            "top": top,
            "description": description,
        })
    }

    for (let id = 0; id < 5; id++) {
        let user = faker.internet.userName()
        let date = `${faker.random.number({min:1, max:28})}/${faker.random.number({min:1, max:12})}/${faker.random.number({min:2019, max:2021})}`
        let commentBody = faker.lorem.sentence(10)
        let userIcon = faker.image.imageUrl(30,30,"people")

        postComments.push({
            "id": id,
            "user": user,
            "date": date,
            "commentBody": commentBody,
            "userIcon": userIcon,
        })
    }

    for (let id = 0; id < 10; id++) {
        let postName = faker.internet.password(8);
        let date = `${faker.random.number({min:1, max:28})}/${faker.random.number({min:1, max:12})}/${faker.random.number({min:2019, max:2021})}`
        let postImage = faker.image.imageUrl(150,250)
        let title = faker.lorem.sentence(([7]))
        let video = null
        let content = faker.lorem.paragraph([4])
        let comments = postComments

        posts.push({
            "id": id,
            "postName": postName,
            "date": date,
            "postImage": postImage,
            "title": title,
            "video": video,
            "content": content,
            "comments": comments,
        })
    }

    return { "products": products, "posts": posts }
}

module.exports = generateProducts