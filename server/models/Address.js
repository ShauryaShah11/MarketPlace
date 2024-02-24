import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
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

const Address = mongoose.model('Address', AddressSchema);

export default Address;
