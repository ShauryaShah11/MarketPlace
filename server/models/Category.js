import mongoose from "mongoose";
import slug from 'mongoose-slug-plugin';

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    tax:{
        type: Number,
        required: true,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    isRemoved: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

CategorySchema.plugin(slug, { tmpl: '<%=name%>' });

const Category = mongoose.model('Category', CategorySchema);

export default Category;