import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.models.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  /* Register user steps
  #my details
  1. User details ✅
  2. database models with correct datatypes ✅
  3. validation for wrong data on both db & UI ✅ => not empty, correct format, valid, unique
  4. profile photo handle => cloudinary Url
  5. password hash => Bcrypt => encrypt
  6. success message on ui, db, backend server,
  7. Api address
  8. routes/router/middlewares

  #Hitesh details
  1. Get user details from frontend ✅
  2. Validation - not empty ✅
  3. Check if user already exists : username, email ✅
  4. Check for images then check for avtar ✅
  5. Upload them to cloudinary, Check avatar ✅
  6. Create user object - create entry in db
  7. Remove password and refresh token field from response
  8. Check for user creation
  9. return res
  */

  const { fullname, email, username, password } = req.body;

  console.log("email: ", email);
  console.log("password: ", password);

  /* Beginer how apply logic
  if (fullname === "") {
    throw new ApiError(400, "Fullname is required");
  }
  */

  //All validation add here
  if (
    [fullname, email, password, username].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Check for usernam, email from database
  const existedUSer = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUSer) {
    throw new ApiError(409, "User with email or username exist");
  }

  //Do console log for files
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  //Check avatar localpath is present
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  // Create dabase entry
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  // Check user is created or not
  const createdUser = await User.findById(User._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "User is not created !! try again !!");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User is register successfully"));
});

export { registerUser };
