let faker = require("faker");

function generateFakerData() {
  let postPreview = [];

  for (let id = 1; id <= 20; id++) {
    let title = faker.lorem.sentences(2);
    let body = faker.lorem.sentences(4);
    let date = faker.date.past();
    let words = faker.lorem.words(1);
    let topic = faker.lorem.words(1);
    let image = faker.image.imageUrl();
    let animals = faker.image.animals();
    let author = faker.name.firstName();

    postPreview.push({
      title: title,
      body: body,
      date: date,
      words: words,
      topic: topic,
      image: image,
      animals: animals,
      author: author,
    });
  }

  // let blogpreview = [];

  // for (let id = 1; id <= 10; id++) {
  //   let title = faker.lorem.words(2);
  //   let body = faker.lorem.sentences(3);
  //   let image = faker.image.imageUrl();
  //   let author = faker.name.firstName();

  //   postPreview.push({ title: title, body: body, image: image, author: author });
  // }

  return { postPreview: postPreview };
}
module.exports = generateFakerData;
