import { Product } from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/Apierror.js";
import { uploadoncloudinary } from "../utils/cloudinary.js";

const addProduct = async (req, res, next) => {
  try {
    const {
      productName,
      description,
      actualPrice,
      discount,
      ingredients,
      benefits
    } = req.body;

    let photos = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await uploadoncloudinary(file.path);
        if (result) photos.push(result.secure_url);
      }
    }

    if (photos.length === 0) {
      throw new ApiError(400, "At least one product photo is required.");
    }

    if (!productName || !description || !actualPrice) {
      throw new ApiError(400, "Product name, description, and actual price are required.");
    }

    const productData = {
      productName,
      description,
      actualPrice,
      photos,
    };

    if (discount !== undefined) productData.discount = discount;
    if (ingredients !== undefined) productData.ingredients = Array.isArray(ingredients) ? ingredients : [ingredients];
    if (benefits !== undefined) productData.benefits = Array.isArray(benefits) ? benefits : [benefits];

    const product = await Product.create(productData);

    return res
      .status(201)
      .json(new ApiResponse(201, product, "Product created successfully."));
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res
      .status(200)
      .json(new ApiResponse(200, products, "All products fetched successfully."));
  } catch (error) {
    next(new ApiError(500, "Failed to fetch products."));
  }
};


export {addProduct , getAllProducts};