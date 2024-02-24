import mongoose from "mongoose";

const AddreshSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        require:true
    },
    city: {
        type: String,
    },
    pincode: {
        type: Number,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    
});

const Addresh = mongoose.model('Addresh', AddreshSchema);

export default Addresh;
