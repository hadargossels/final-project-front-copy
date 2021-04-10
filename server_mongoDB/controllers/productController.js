const Product = require("../models/Product")
const mongoose = require("mongoose")


exports.findAll = async (req, res) => {
    console.log(req.params)
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
                case " category":
                    match["categories.id"] = { $regex: search[key], $options: 'i' };
                    break;
                case "inStock":
                    match["inStock"] = search[key];
                    break;
                // case "price":
                //     match["price"] = { $lte: search[key] };
                //     break;
                default:
                    match[key] = { $regex: search[key], $options: 'i' };
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
        console.log(aggregate_options)
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

exports.findCategoryProducts = async (req, res) => {
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
    
    //FILTER BY CATEGORY PARAMS
    aggregate_options.push({$match: {"categories.parent": {$regex : req.params.category, $options: 'i'} } });

    //FILTER BY SUBCATEGORY QUERY
    if(req.query.subcategory) {
        const match = {};
        const query = req.query.subcategory.split(',').map(element => {
            return {"categories.name": {$regex : element, $options: 'i'} }
        })
        match["$or"] = query
        aggregate_options.push({$match: match});
    }

    //FILTER BY INSTOCK QUERY
    if(req.query.inStock) {
        aggregate_options.push({$match: {"inStock" : (req.query.inStock == 'true') }});
    }

    //FILTER BY PRICE QUERY
    if(req.query.price && req.query.price > 0) {
        aggregate_options.push({$match: {actualPrice: {$lte: parseFloat(req.query.price) } }});
    }

    //SORT
    if(req.query.sort){
        const sortProduct = req.query.sort.toLowerCase() === 'asc'? 1 : -1
        aggregate_options.push({$sort: {"actualPrice": sortProduct}});
    }
    else{
        aggregate_options.push({$sort: {"createdAt": -1}});
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
}

exports.findOneProduct = async function (req, res) {
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
        actualPrice: req.body.price * (1 - req.body.discount),
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