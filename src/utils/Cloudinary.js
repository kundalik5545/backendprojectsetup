import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return console.log("🚫 Local file path not found");
    //upload the file on cloudinary
    const cloudinaryResponse = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //File upload successfully
    console.log("🚀 File is uploaded on cloudinary", cloudinaryResponse.url);
    return cloudinaryResponse;
  } catch (error) {
    //Now remove localy saved temp file from public/temp folder when uploding failed
    fs.unlinkSync(localFilePath);
  }
};

export { uploadOnCloudinary };
