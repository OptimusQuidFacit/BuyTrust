import mongoose from "mongoose" 
import { Schema } from  "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, enum: ['buyer', 'seller', 'admin'], default: 'buyer' },
    isOnboarded: { type: Boolean, default: false }, // For sellers' onboarding status
    sellerDetails: {
      companyName: { type: String, default:"not selected" },
      companyLocation: { type: String, default:"not selected" },
      documents: [{ type: String }], // URLs or references to uploaded KYC docs
    },
    wallet: {
      balance: { type: Number, default: 0 }, // For managing escrowed funds
      pendingBalance: { type: Number, default: 0 }, // Pending funds in escrow
    },
  },
  { timestamps: true }
);
export type sessionType= {
  name: string,
  password:string,
  isAdmin:boolean,
}


const User = mongoose.models?.User || mongoose.model('User', UserSchema);
export default User;
