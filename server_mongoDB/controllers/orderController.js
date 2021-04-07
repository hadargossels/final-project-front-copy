const Order = require("../models/Order")
const mongoose = require("mongoose")
const path = require('path');

exports.findAll = async (req, res) => {
    console.log(req)

    const limit_ = 5;
    const aggregate_options = [];

    //1- PAGINATION - set the options for pagination
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || limit_;

    if (req.query.range){
        let [from, to] = JSON.parse(req.query.range)
        limit = to + 1 - from
        page = (to + 1) / limit
    }

    const options = {
        page, 
        limit,
        collation: {locale: 'en'},
        customLabels: {
            totalDocs: 'totalResults',
            docs: 'orders'
        }   
    }

    //2 - LOOKUP/JOIN - use $lookup(aggregation) to get the relationship from event to categories (one to many).
    // aggregate_options.push({
    //     $lookup: {
    //         from: 'categories',
    //         localField: "category",
    //         foreignField: "_id",
    //         as: "categories"
    //     }
    // });
    
    //3 - FILTERING TEXT SEARCH
    if (req.query.filter && Object.keys(JSON.parse(req.query.filter)).length) {
        const match = {};
        let search = JSON.parse(req.query.filter)
        let query = ""
        console.log(req.query.filter)
        console.log(search)
        if (Array.isArray(search[Object.keys(search)[0]])){
            search[Object.keys(search)[0]].forEach(element => {
                if (query)
                    query += `|${element}`
                else
                    query = element
            })
            
        }
        else{
            query = search[Object.keys(search)[0]]
        }
        match[Object.keys(search)[0]] = {$regex: query, $options: 'i'};    
        aggregate_options.push({$match: match});
    } 

    //4 - SORT
    if (req.query.sort) {
        let [sortBy, sortOrder] = JSON.parse(req.query.sort)
        sortOrder = sortOrder.toLowerCase()==='desc'? -1 :1
        aggregate_options.push({$sort: {[sortBy]: sortOrder}});
    }
    

    try {
        const myAggregate = Order.aggregate(aggregate_options);
        const result = await Order.aggregatePaginate(myAggregate, options);
        
        res.setHeader('Content-Range', `${result.orders.length}`)
        res.status(200).json(result.orders);
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error: err})
    }

    // try{
    //     const orders = await Order.find({});
    //     res.status(200).json({
    //         count: orders.length,
    //         orders: orders
    //     });
    // }
    // catch(err){
    //     console.log(err);
    // }
    
}

exports.findOne = async function (req, res) {
    try{
        const order = await Order.findById(req.params.id);
        if (order){
            res.status(200).json(order);
        }
        else{
            res.status(404).json({message: 'Order not found'})
        } 
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}

exports.create = async function (req, res) {

    const order = new Order({
        _id: new mongoose.Types.ObjectId,
        subtotalAmount: req.body.subtotalAmount,
        taxesAmount: req.body.taxesAmount,
        couponCode: req.body.couponCode,
        couponDiscountAmount: req.body.couponDiscountAmount,
        deliveryAmount: req.body.deliveryAmount,
        totalAmount: req.body.totalAmount,
        deliveryMethod: req.body.deliveryMethod,
        products: req.body.products,
        recipient: req.body.recipient,
        userId: req.body.userId
    })
    
    try{
        const newOrder = await order.save();
        res.status(201).json({
            message: 'Order was created',
            create_order: newOrder
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}

exports.update = async function (req, res) {
    const updatedOrder = {};

    for (const [key, value] of Object.entries(req.body)) {
        if (req.body[key] && (key === 'status' || key === 'recipient')){
            updatedOrder[key] = req.body[key]
        }
        else if(key !== 'status' || key !== 'recipient'){
            return res.status(500).json({error: 'Fields are invalid to be updated'})
        }
    }

    try{
        await Order.updateOne({_id: req.params.id} ,{$set: updatedOrder});
        res.status(201).json({
            message: 'Order was updated',
            orderId: req.params.id
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }
}

exports.delete = async function (req, res) {
    try{
        await Order.deleteOne({_id: req.params.id});
        res.status(200).json({
            message: 'Order was deleted',
            orderId: req.params.id
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}

