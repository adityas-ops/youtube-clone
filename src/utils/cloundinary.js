import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUNDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_APL_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloundinary = async (localfilePath)=>{
 try {
    if(!localfilePath) return;
    // upload the file on coundinary 
    const result = await cloudinary.uploader.upload(localfilePath,{
        resource_type:"auto",
    });
    // file upload successfully
    console.log("file is uploaded on coundinary",result.url);
    fs.unlinkSync(localfilePath);
    return result;

 } catch (error) {
    //  remove the locally saved temperory file as done 
    fs.unlinkSync(localfilePath);
    return;
 }
}

export {uploadOnCloundinary};