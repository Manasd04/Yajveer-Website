import { Review } from "../models/review.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/Apierror.js";
import { uploadoncloudinary } from "../utils/cloudinary.js";

export const addReview = async (req, res, next) => {
  try {
    const { name, review, rating } = req.body;
    const user = req.user;
    if (!name || !review || !rating) {
      throw new ApiError(400, "All fields are required.");
    }
    if (!req.file) {
      throw new ApiError(400, "Product photo is required.");
    }
    if (rating < 1 || rating > 5) {
      throw new ApiError(400, "Rating must be between 1 and 5.");
    }

    const result = await uploadoncloudinary(req.file.path);
    if (!result || !result.secure_url) {
      throw new ApiError(500, "Please Upload Another photo!!");
    }

    const reviewDoc = await Review.create({
      user: user._id,
      name,
      productPhoto: result.secure_url,
      review,
      rating,
    });

    return res
      .status(201)
      .json(new ApiResponse(201, reviewDoc, "Review submitted successfully."));
  } catch (error) {
    next(error);
  }
};
