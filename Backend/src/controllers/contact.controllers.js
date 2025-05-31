import { Contact, allowedSubjects } from "../models/contact.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/Apierror.js";

export const submitContactForm = async (req, res, next) => {
  try {
    const { name , email, phone , subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      throw new ApiError(400, "All fields are required.");
    }

    if (!allowedSubjects.includes(subject)) {
      throw new ApiError(400, "Invalid subject selected.");
    }

    const contactData = { name, email, phone, subject, message };
    if (req.user) contactData.user = req.user._id;

    const contact = await Contact.create(contactData);

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          contact,
          "Your message has been sent. We'll get back to you soon!"
        )
      );
  } catch (error) {
    next(error);
  }
};
