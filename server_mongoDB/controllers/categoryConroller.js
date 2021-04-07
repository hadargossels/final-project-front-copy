const Category = require("../models/Category")
const mongoose = require("mongoose");


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
            docs: 'categories'
        }   
    }
    
    //2 - FILTERING TEXT SEARCH
    if (req.query.filter && Object.keys(JSON.parse(req.query.filter)).length) {
        const match = {};
        let search = JSON.parse(req.query.filter);
        let query = "";
        // console.log(search);
        // console.log(search[Object.keys(search)]);
        // console.log(search[Object.keys(search)[0]]);
        // console.log(Array.isArray(search[Object.keys(search)[0]]));
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

    //3 - SORT
    if (req.query.sort) {
        let [sortBy, sortCategory] = JSON.parse(req.query.sort)
        sortCategory = sortCategory.toLowerCase()==='desc'? -1 :1
        aggregate_options.push({$sort: {[sortBy]: sortCategory}});
    }
    

    try {
        const myAggregate = Category.aggregate(aggregate_options);
        const result = await Category.aggregatePaginate(myAggregate, options);
        
        res.setHeader('Content-Range', `${result.categories.length}`)
        res.status(200).json(result.categories);
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error: err})
    }

    // try{
    //     const categories = await Category.find({});
    //     res.status(200).json({
    //         count: categories.length,
    //         categories: categories
    //     });
    // }
    // catch(err){
    //     console.log(err);
    // }
    
}

exports.findOne = async function (req, res) {
    try {
        const category = await Category.findById(req.params.id);
        if (category){
            res.status(200).json(category);
        }
        else{
            res.status(404).json({message: 'Category not found'})
        } 
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error: err})
    } 
}

exports.create = async function (req, res) {
    const categories = []
    const subcategories = req.body.subcategories

    const mainCategory = new Category({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        parent: null,
        path: `/${req.body.name}`
    })

    categories.push(mainCategory)

    if (subcategories){

        subcategories.forEach( element => {
            const subcategory = new Category({
                _id: new mongoose.Types.ObjectId,
                name: element,
                parent: req.body.name,
                path: `/${req.body.name}/${element}`
            })
            
        categories.push(subcategory)
        });
    }

    try {
        await Category.insertMany(categories);
        res.status(201).json({
            message: 'Category was created',
            created_categories: categories
        })
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error: err})
    } 
}

// exports.update = async function (req, res) {
// }

exports.delete = async function (req, res) {
    const categoriesDeleted = []
    
    try {
        const mainCategory = await Category.findById(req.params.id);
        const subcategories = await Category.find({parent: mainCategory.name})

        const mainCategoryDeleted = await Category.findByIdAndDelete({_id: req.params.id});
        categoriesDeleted.push(mainCategoryDeleted)

        for (const subcategory of subcategories){
            const subCategoryDeleted = await Category.findByIdAndDelete({_id: subcategory._id});
            categoriesDeleted.push(subCategoryDeleted)
        }

        res.status(200).json({
            message: 'Categories deleted successfuly',
            deleted: categoriesDeleted
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}

// exports.index = async function (req, res) {

// }

