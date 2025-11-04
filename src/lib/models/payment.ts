import mongoose from "mongoose" 
import { Schema } from  "mongoose";
const PaymentSchema = new Schema(
    {
      order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
      amount: { type: Number, required: true },
      status: {
        type: String,
        enum: ['escrowed', 'released', 'refunded'],
        default: 'escrowed',
      },
      transactionId: { type: String, required: true }, // Reference to external payment processor
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model('Payment', PaymentSchema);
  