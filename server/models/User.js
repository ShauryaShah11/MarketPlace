import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'customer'],
    default: "customer"
  },
  email: {
    type: String,
    unique: true,
    sparse: true // allows multiple documents to have no email (null), but only one with a unique value
  },
  mobileNo: {
    type: String,
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    required: true
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }], // corrected spelling of "address"
  image: {
    type: String,
    required: true
  },
  token:{//for  reset password
    type:String
  },
  resetPasswordExpires:{
     type:Date
  }
});

// Custom validation function to ensure either email or mobileNo is provided but not both
function existEmailOrMobileNo() {
    // Check if either email or mobileNo is provided
    if (!this.email && !this.mobileNo) {
        throw new Error("Either email or mobile number is required.");
    }
}
//before this function stored in db first it called
userSchema.pre("save", function(next) {
    try {
        existEmailOrMobileNo.call(this);
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('User', userSchema);
export default User;
