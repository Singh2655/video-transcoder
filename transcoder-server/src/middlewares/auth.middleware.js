const User = require("../models/user.model.js");
const { ApiError } = require("../utils/ApiError.js");
const { asyncHandler } = require("../utils/asyncHandler.js");

const isAuthenticated = asyncHandler(async (req, _, next) => {
  try {
    console.log(req.cookies);
    const token = req.cookies?.["connect.sid"];
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Token");
  }
});

module.exports = {
  isAuthenticated,
};
