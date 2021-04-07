const Product = require("../models/Product")
const mongoose = require("mongoose")
const path = require('path');
const Category = require('../models/Category')

exports.findAll = async (req, res) => {
    console.log(req.query)

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
            docs: 'products'
        }   
    }

    //2 - LOOKUP/JOIN - use $lookup(aggregation) to get the relationship from event to categories (one to many).
    aggregate_options.push({
        $lookup: {
            from: 'categories',
            localField: "category",
            foreignField: "_id",
            as: "categories"
        }
    });
    //deconstruct the $categories array using $unwind(aggregation).
    aggregate_options.push({$unwind: {path: "$categories", preserveNullAndEmptyArrays: true}});
    
    //3 - FILTERING TEXT SEARCH
    if (req.query.filter && Object.keys(JSON.parse(req.query.filter)).length) {
        let search = JSON.parse(req.query.filter);

        let match = {};
        for (let key in search) {
            switch(key) {
                case "category":
                    match["categories.id"] = { $regex: search[key], $options: 'i' };
                    break;
                case "price":
                    match["price"] = { $lte: parseInt(search[key])};
                    break;
                case "inStock":
                    match["inStock"] = !!search[key];
                    break;
            }
        }
        aggregate_options.push({$match: match});
    } 

    //4 - SORT
    if (req.query.sort) {
        let [sortBy, sortProduct] = JSON.parse(req.query.sort)
        sortProduct = sortProduct.toLowerCase() === 'asc'? 1 : -1
        aggregate_options.push({$sort: {[sortBy]: sortProduct}});
    }
    

    try {
        const myAggregate = Product.aggregate(aggregate_options);
        const result = await Product.aggregatePaginate(myAggregate, options);
        
        res.setHeader('Content-Range', `${result.products.length}`)
        res.status(200).json(result.products);
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error: err})
    }
    
    // try{
    //     const products = await Product.find({});
    //     res.setHeader("Content-Range", `${products.length}`);
    //     res.status(200).json(
    //         // count: products.length,
    //         // products: products
    //         products
    //     );
    // }
    // catch(err){
    //     console.log(err);
    // }
    
}

exports.findOne = async function (req, res) {
    try{
        const product = await Product.findById(req.params.id);
        if (product){
            res.status(200).json(product);
        }
        else{
            res.status(404).json({message: 'Product not found'})
        } 
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}

exports.create = async function (req, res) {
    const product_images = [];

    req.files.forEach(element => {
        const path = 'http://localhost:8080/images/product_images/' + element.originalname
        product_images.push(path)
    });

    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        discount: req.body.discount,
        actual_price: req.body.actual_price,
        stars: req.body.stars,
        category: req.body.category,
        subcategory: req.body.subcategory,
        inStock: req.body.inStock,
        product_images: product_images,
    })
    
    try{
        const newProduct = await product.save();
        res.status(201).json({
            message: 'Product was created',
            create_product: newProduct
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}

exports.update = async function (req, res) {
    const updatedProduct = {};
    const updated_product_images = [];

    for (const [key, value] of Object.entries(req.body)) {
        if (req.body[key]){
            updatedProduct[key] = req.body[key]
        }
    }
    
    if(req.files){
        req.files.forEach(element => {
            const path = 'http://localhost:8080/images/product_images/' + element.originalname
            updated_product_images.push(path)
        });
        updatedProduct.product_images = updated_product_images
    }

    try{
        await Product.updateOne({_id: req.params.id} ,{$set: updatedProduct});
        res.status(201).json({
            message: 'Product was updated',
            productId: req.params.id
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }
}

exports.delete = async function (req, res) {
    try{
        const result = await Product.findOneAndDelete({_id: req.params.id});
        console.log(result)
        if(result) {
            res.status(200).json({
                message: 'Product was deleted',
                productId: req.params.id
            })
        }
        else {
            res.status(401).json({message: "Product does not exist"});
        }
        
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}

exports.index = async function (req, res) {
    
    const aggregate_options = [];
    const limit_ = 10;

    const search = !!(req.query.q);
    const match_regex = {$regex: req.query.q, $options: 'i'}; //use $regex in mongodb - add the 'i' flag if you want the search to be case insensitive.

    //PAGINATION -- set the options for pagination
    const options = {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || limit_,
        collation: {locale: 'en'},
        customLabels: {
            totalDocs: 'totalResults',
            docs: 'products'
        }
    };

    //1
    //FILTERING AND PARTIAL TEXT SEARCH -- FIRST STAGE
    if (search) aggregate_options.push({$match: {"name": match_regex}});

    //2
    //LOOKUP/JOIN -- SECOND STAGE
    //FIRST JOIN  -- Category ===================================
    // Here we use $lookup(aggregation) to get the relationship from event to categories (one to many).
    aggregate_options.push({
        $lookup: {
            from: 'categories',
            localField: "category",
            foreignField: "_id",
            as: "categories"
        }
    });

    //3A
    //FILTER BY Category -- THIRD STAGE - use mongoose.Types.ObjectId() to recreate the moogoses object id
    if (req.query.category) {
        aggregate_options.push({
            $match: {
                category: mongoose.Types.ObjectId(req.query.category)
            }
        });
    }


    //3B
    //FILTER BY EventID -- THIRD STAGE - use mongoose.Types.ObjectId() to recreate the moogoses object id
    if (req.query.id) {
        aggregate_options.push({
            $match: {
                _id: mongoose.Types.ObjectId(req.query.id)
            }
        });
    }

    //4
    //FILTER BY DATE -- FOURTH STAGE
    if (req.query.start) {
        let start = moment(req.query.start).startOf('day');
        let end = moment(req.query.start).endOf('day'); // add 1 day

        if (req.query.end) end = req.query.end;

        aggregate_options.push({
            $match: {"start_date": {$gte: new Date(start), $lte: new Date(end)}}
        });

    }else if (req.query.end) {
        aggregate_options.push({
            $match: {"start_date": {$lte: new Date(req.query.end)}}
        });
    }else if (!search){
        aggregate_options.push({
            $match: {"start_date": {$gte: new Date()}}
        });
    }

    //5
    //SORTING -- FIFTH STAGE
    let sort_order = req.query.sort_order && req.query.sort_order === 'asc' ? 1 : -1;
    let sort_by = req.query.sort_by || "start_date";
    aggregate_options.push({
        $sort: {
            [sort_by]: sort_order,
            "_id": -1
        },
    });


    // Set up the aggregation
    const myAggregate = Event.aggregate(aggregate_options);
    const result = await Event.aggregatePaginate(myAggregate, options);

    const categories = await Category.find({});
    result["categories"] = categories;
    res.status(200).json(result);
};

