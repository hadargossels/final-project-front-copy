const mongoose = require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

// const subcategorySchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     }
// })

// const categorySchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     subcategories: [subcategorySchema]
// });


const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
});

categorySchema.plugin(aggregatePaginate);

module.exports = mongoose.model('categories', categorySchema);



// const subcategorySchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     }
// })

// const categorySchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     subcategories: [subcategorySchema]
// });