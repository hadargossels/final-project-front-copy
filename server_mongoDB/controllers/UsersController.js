const User = require("../models/User")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.signup = async function (req, res) {
    userExist = await User.findOne({email: req.body.email})

    if(!userExist) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err){
                console.log(err);
                return res.status(500).json({error: err})
            }
            else {
                const user = new User ({
                    _id: new mongoose.Types.ObjectId(),
                    email: req.body.email,
                    password: hash
                })
                user.save()
                .then( result => {
                    res.status(201).json( {message: 'User created successfully'} )
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({error: err})
                })
            }
        })
    }
    else {
        res.status(500).json({error: "enail allready exist"})
    }

    
}

exports.login = async function (req, res) {
    user = await User.findOne({email: req.body.email})

    bcrypt.hash(req.body.password, user.password, (err, result) => {
        if (err){
            console.log(err);
            return res.status(401).json({message: 'Auth failed'})
        }
        if (result) {
            const token = jwt.sign( 
                { email: user.email, userId: user._id }, 
                process.env.JWT_KEY,
                { expiresIn: "1h"}
            );
            return res.status(200).json({
                message: 'Auth successful',
                token : token
            })
        }
    })
}

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
            docs: 'users'
        }   
    }
    
    //3 - FILTERING TEXT SEARCH
    if (req.query.filter && Object.keys(JSON.parse(req.query.filter)).length) {
        let search = JSON.parse(req.query.filter);

        let match = {};
        for (let key in search) {
            if (!Array.isArray(search[key])) {
                switch(key) {
                    case "active":
                        match["active"] = search[key];
                        break;
                    default:
                        match[key] = { $regex: search[key], $options: 'i' };
                        break;
                }
            }
        }
        aggregate_options.push({$match: match});
    }

    //4 - SORT
    if (req.query.sort) {
        let [sortBy, sortUser] = JSON.parse(req.query.sort)
        sortUser = sortUser.toLowerCase()==='desc'? -1 :1
        aggregate_options.push({$sort: {[sortBy]: sortUser}});
    }
    

    try {
        const myAggregate = User.aggregate(aggregate_options);
        const result = await User.aggregatePaginate(myAggregate, options);
        
        res.setHeader('Content-Range', `${result.users.length}`)
        res.status(200).json(result.users);
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error: err})
    }

    
}

exports.findOne = async function (req, res) {
    try{
        const result = await User.findById(req.params.id);
        if (result){
            res.status(200).json(result);
        }
        else{
            res.status(404).json({message: 'User not found'})
        } 
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}





// exports.delete = async function (req, res) {
//     try{
//         const result = await Employee.deleteOne({_id: req.params.id});
//         res.status(200).json({
//             message: 'Employee was deleted',
//             employeeId: req.params.id
//         })
//     }
//     catch(err){
//         console.log(err)
//         res.status(500).json({error: err})
//     } 
// }

