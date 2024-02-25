import mongoose from "mongoose";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import { z } from "zod";

const productSchema = z.object({
    name: z.string().min(1),
    brand: z.string().min(1),
    price: z.number().min(0),
    description: z.string().min(1).max(200),
    tax: z.number().min(0),
    images: z.array(z.string()),
    category: z.instanceof(mongoose.Types.ObjectId),
    whyToSale: z.string().max(200),
    ownerCount: z.number().min(1),
    ownerId: z.instanceof(mongoose.Types.ObjectId),
    postingDate: z.date()
});

const IdSchema = z.string().refine((val) => {
    return mongoose.Types.ObjectId.isValid(val);
  }, {
    message: 'Invalid Id format',
  });
  
  const validateId = (Id) => {
    const validationResult = IdSchema.safeParse(Id);
    return validationResult.success ? null : {
      error: 'Invalid id format',
      details: validationResult.error.errors,
    };
  };  
   
const taxCalculation = (price, tax) => {
    return price * tax / 100;
}

export const addProduct = async (req, res) => {
    try{
        const {name, brand, price, description, categoryId, whyToSale,tags, ownerCount} = req.body;
        const category = await Category.findById(categoryId);
        if(!category){
            return res.status(404).json({
                error: 'Category not found'
            })
        }
        const tax = taxCalculation(price, category.tax);
        const images = req.fileUrls;
        const newProduct = new Product({
            name,
            brand, 
            price,
            description,
            tax,
            tags,
            category:categoryId,
            whyToSale,
            ownerCount,
            ownerId: req.user._id,
            images: images,
            postingDate: Date.now()
        })
        const validateProduct = productSchema.safeParse(newProduct);
        if(!validateProduct.success){
            console.log(validateProduct.error.errors)
            return res.status(400).json({
                error: 'Invalid product format',
                details: validateProduct.error.errors
            })
        }
        const savedProduct = await newProduct.save();
        await Category.findByIdAndUpdate(categoryId, {
            "$push":{
                products: savedProduct._id
            }
        })
        return res.status(201).json({
            success: true,
            message: 'Product added successfully'
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error'
        })
    }
}

export const updateProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const validationIdError = validateId(id);
        if (validationIdError) {
            return res.status(400).json(validationIdError);
        }
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
        const images = req.fileUrls;
        const updatedProduct = new Product({
            name,
            brand, 
            price,
            description,
            tax,
            category,
            whyToSale,
            ownerCount,
            images,
            postingDate: Date.now()
        })
        const validateProduct = productSchema.safeParse(updatedProduct);
        if(!validateProduct.success){
            return res.status(400).json({
                error: 'Invalid product format',
                details: validateCourse.error.errors
            })
        }
        if(product.category !== category){
            await Category.findByIdAndUpdate(product.category, {
                "$pull":{
                    products: product._id
                }
            })
        }
        const updatedCourse = await Product.findByIdAndUpdate(product._id, updatedProduct);
        await Category.findByIdAndUpdate(categoryId, {
            "$push":{
                products: updatedCourse._id
            }
        })
        return res.status(201).json({
            success: true,
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

export const removeProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const validationIdError = validateId(id);
        if (validationIdError) {
            return res.status(400).json(validationIdError);
        }
        const product = await Product.findById(id);

        if(!product){
            return res.status(404).json({
                error: 'Product not found'
            })
        }
        await Product.findByIdAndUpdate(product._id, {isRemoved: true});

        return res.status(200).json({
            success: true,
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
        const products = await Product.find({ isRemoved: false })      

        return res.status(200).json(products);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}
export const getProductsAll = async (req, res) => {
    try{
        const products = await Product.find({ isRemoved: false })
        .populate({
            path: 'ownerId',
     
        })
        .populate('category');

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
        const validationIdError = validateId(id);
        if (validationIdError) {
            return res.status(400).json(validationIdError);
        }
        const product = await Product.findById(id).populate('ownerId');
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

