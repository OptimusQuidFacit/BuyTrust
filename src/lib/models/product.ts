import mongoose from "mongoose" 
import { Schema } from  "mongoose";

const ProductSchema = new Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      category: [{ type: String, required: true }],
      stock: { type: Number, default: 0 },
      seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link to seller
      images: [{ type: String }], // Array of image URLs
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model('Product', ProductSchema);
  