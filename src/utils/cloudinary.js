import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError.js";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localeFilePath) => {
    try {
        if (!localeFilePath) return null;
        const response = await cloudinary.uploader.upload(localeFilePath, {
            resource_type: "auto"
        });

        fs.unlinkSync(localeFilePath);
        return response;

    } catch (error) {
        fs.unlinkSync(localeFilePath);
        return null;
    }

};

const deleteFromCloudinary = async (fileUrl, fileType) => {

    if (!fileUrl) throw new ApiError(404, "File not found for delete");

    try {
        const filePublicId = fileUrl.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(filePublicId, { resource_type: fileType });
    } catch (error) {
        throw new ApiError(400, "Failed to delete");
    }
};

export {
    uploadOnCloudinary,
    deleteFromCloudinary
};