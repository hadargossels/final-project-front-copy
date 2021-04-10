const mongoose = require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

// const categorySchema = mongoose.Schema({
//     category: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function(category) {
//                 return category === 'Bedroom' || category === 'Bathroom' || category === 'Living-room';
//             },
//             message: 'You must provide a valid category'
//         }
//     },
//     subcategory: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function(category) {
//                 return category === 'Bedroom' || category === 'Bathroom' || category === 'Living-room';
//             },
//             message: 'You must provide a valid category'
//         }
//     }
// });

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    actualPrice: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        required: true,
        validate: {
            validator: function(num) {
              return Number.isInteger(num) && num >=0 && num <= 5;
            },
            message: 'You must provide an integer between 0 and 5'
        }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    inStock: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    product_images: {
        type: Array,
        required: true
    }
});

productSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('products', productSchema);