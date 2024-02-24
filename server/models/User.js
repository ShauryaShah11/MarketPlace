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

function existEmailOrMobileNo() {
    if (!this.email && !this.mobileNo) {
        throw new Error("Either email or mobile number is required.");
    }
}
userSchema.pre("save", function(next) {
    try {
        existEmailOrMobileNo.call(this);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);
export default User;
