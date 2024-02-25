import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tax: {
        type: Number,
        required: true,
    },
    images: [{
        type: String,
        required: true,
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        required: true,
    },
    whyToSale: {
        type: String,        
    },
    isSold:{
        type:Boolean,
        default:false
    } ,
    tags: {
        type: [String],
    },
    postingDate:{
        type:Date,
        default:Date.now
    },
    ownerCount:{
        type:Number,
        required:true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    isRemoved: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
