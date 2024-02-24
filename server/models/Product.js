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
    postingDate:{
        type:Date,
        default:Date.now()
    },
    ownerNo:{//i mean second hand or third-hand 
        type:Number,
        require:true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
