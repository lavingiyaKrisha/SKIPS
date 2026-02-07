const cloudinary = require("cloudinary").v2;

const uploadTocloudinary = async(path)=>{

    cloudinary.config({
        cloud_name:"dmjh93n6u",
        api_key:"242484454516472",
        api_secret:"uwSJSc6Ih9bUdQp5P8N1iQ7qqgQ"
    })

    const response = await cloudinary.uploader.upload(path)
    return response;

}
module.exports = {uploadTocloudinary}