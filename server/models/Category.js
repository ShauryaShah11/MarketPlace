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
    products: [{product: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
}, { timestamps: true });

CategorySchema.plugin(slug, { tmpl: '<%=name%>' });

const Category = mongoose.model('Category', CategorySchema);

export default Category;