const mongoose = require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const recipientSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        match: /^0\d{1,2}\d{7}/
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    homeNumber: {
        type: Number,
        required: true
    },
    apartmentNumber: {
        type: Number,
        required: true
    }
})

const orderedProducts = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    }, 
    quantity: {
        type: Number,
        default: 1
    }
})

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    status: {
        type: String,
        validate: {
            validator: function(status) {
                const validStatus = ['ordered', 'in proccess', 'confirmed', 'sent', 'received', 'returned']
                return validStatus.find(element => element === status);
            },
            message: 'You must provide a valid status'
        },
        default: 'ordered'
    },
    subtotalAmount: {
        type: Number,
        required: true
    },
    taxesAmount: {
        type: Number,
        required: true
    },
    couponCode: {
        type: String,
        required: true
    },
    couponDiscountAmount: {
        type: Number,
        required: true
    },
    deliveryAmount: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    deliveryMethod: {
        type: String,
        validate: {
            validator: function(deliveryMethod) {
                const validDeliveryMethod = ['ordered', 'in proccess', 'confirmed', 'sent', 'received', 'returned']
                return validDeliveryMethod.find(element => element === deliveryMethod);
            },
            message: 'You must provide a valid status'
        },
        required: true
    },
    orderedProducts: [ orderedProducts ],
    recipient: {
        type: recipientSchema,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

orderSchema.plugin(aggregatePaginate);

module.exports = mongoose.model('orders', orderSchema);


    // recipient: {
    //     firstName: {type:String, required:true}
    // },

    // orderedProducts: [ {
    //     productId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         required: true,
    //         ref: 'Product'
    //     }, 
    //     quantity: {
    //         type: Number,
    //         default: 1
    //     }
    // } ],