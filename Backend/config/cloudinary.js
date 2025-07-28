import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"
const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CLOUD_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    try {
        const uploadResult = await cloudinary.v2.uploader
        uploadResult.upload(filePath)
            .then(result => console.log(result));
        fs.unlinkSync(filePath)
        return uploadResult.secure_url;
    } catch (error) {
        fs.unlinkSync(filePath)
        return res.status(500).json({ message: "Cloudinary error " })

    }
}

export default uploadOnCloudinary;