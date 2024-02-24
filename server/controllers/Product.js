import Category from "../models/Category";
import Product from "../models/Product";
import { z } from "zod";

const taxCalculation = (price, tax) => {
    return price * tax / 100;
}

export const addProduct = async (req, res) => {
    try{
        const {name, brand, price, description, categoryId, whyToSale, ownerCount} = req.body;
        const category = await Category.findById(categoryId);
        if(!category){
            return res.status(404).json({
                error: 'Category not found'
            })
        }
        const tax = taxCalculation(price, category.tax);
        const newProduct = new Product({
            name,
            brand, 
            price,
            description,
            tax,
            category,
            whyToSale,
            ownerCount,
            postingDate: Date.now()
        })
        await newProduct.save();
        return res.status(201).json({
            message: 'Product added successfully'
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

export const updateProduct = async (req, res) => {
    try{
        const id = req.params.productId;
        const {name, brand, price, description, categoryId, whyToSale, ownerCount} = req.body;
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({
                error: 'Product not found'
            })
        }
        const category = await Category.findById(categoryId);
        if(!category){
            return res.status(404).json({
                error: 'Category not found'
            })
        }
        const tax = taxCalculation(price, category.tax);
        const updatedProduct = new Product({
            name,
            brand, 
            price,
            description,
            tax,
            category,
            whyToSale,
            ownerCount,
            postingDate: Date.now()
        })
        await Product.findByIdAndUpdate(product._id, updatedProduct);
        return res.status(201).json({
            message: 'Product updated successfully'
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

export const removePorduct = async (req, res) => {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);

        if(!product){
            return res.status(404).json({
                error: 'Product not found'
            })
        }
        await Product.findByIdAndUpdate(product._id, {isRemoved: true});

        return res.status(200).json({
            message: 'Product removed successfully'
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find({isRemoved: false});
        return res.status(200).json(products);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

export const getProductById = async (req, res) => {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({
                error: 'Product not found'
            })
        }
        return res.status(200).json(product);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

export {
    addProduct,
    updateProduct,
    removePorduct,
    getProducts,
    getProductById
}