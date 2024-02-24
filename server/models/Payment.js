import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
      type: String,
      required: true,
  },
  razorpay_signature: {
      type: String,
      required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  Prodcut: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }, 
  paymentStatus: {
    type: String,
    enum: ['completed', 'pending', 'failed'],
    required: true
  },
  paymentDate: { type: Date, default: Date.now }, // Date of the payment
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;