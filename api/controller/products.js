const products = require('../models/products')
const uuid = require('uuid');
const { json } = require('express');

exports.getAllProducts = (req, res, next) => {
    products.productsMapper.findAll().then((data) => {
        const response = {
            products: data["_rs"]["rows"].map(doc => {
                return {
                    id: doc.id,
                    name : doc.name,
                    price: doc.price,
                    requestId: {
                        type: "GET",
                        url: "http://localhost:3000/products/" + doc.id
                        }
                    }
            })
        };
        
    res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
};

exports.getProductWithProductId = (req, res, next) => {
    const id = req.params.productId;
    products.productsMapper.get({id})
    .then(data => {
        if (data){
            res.status(200).json({productDetails: data});
        }
        else {
            res.status(404).json({
                message: "No product found with the productId: " + id
            })
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })

};

exports.addNewProduct = (req, res, next) => {
    const product = {
        id: uuid.v4(),
        name: req.body.name,
        price: req.body.price,
    };

    products.productsMapper.insert(product)
    res.status(201).json({
        message: "Request received successfully"
    })
    

};

exports.updateProduct = (req, res, next) => {
    const productId = req.params.productId;

    const product = {
        id: productId,
        name: req.body.name,
        price: req.body.price
    };
    
    products.productsMapper.insert(product)
            res.status(201).json({
                message: "Product updated successfully"
            })
    
};

const deleteProduct = (req, res, next) => {
    id = req.params.productId;
    products.productsMapper.get({id})
    .then(data => {
        if (data){
            products.productsMapper.remove({id});
            res.status(200).json({
            message: id + " was deleted successfully"
        })
        }
        else {
            res.status(403).json({
                message: "Requested product not found"
            })
        }
        
    })
    
};


exports.default = {
    deleteProduct
}