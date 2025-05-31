import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    photos: {
      type: [String],
      validate: {
        validator: function (arr) {
          return arr.length <= 7;
        },
        message: "You can upload a maximum of 7 photos."
      }
    },
    productName: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    discount: { //in percentage
      type: Number,
      min: 0,
      max: 100,
      default : 0 
    },
    ingredients: {
      type: [String],
      default: []
    },
    benefits: {
      type: [String],
      default: []
    },
    actualPrice: {
      type: Number,
      required: true,
      min: 0
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
