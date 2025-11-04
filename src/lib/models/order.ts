import mongoose from "mongoose" 
import { Schema } from  "mongoose";

const OrderSchema = new Schema(
    {
      buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      totalAmount: { type: Number, required: true }, // Calculated price * quantity
      status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        default: 'pending',
      },
      paymentStatus: {
        type: String,
        enum: ['escrowed', 'released', 'refunded'],
        default: 'escrowed',
      },
      isConfirmed: { type: Boolean, default: false }, // Buyer confirmation
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model('Order', OrderSchema);
  