const { cloudinary } = require('../utils/cloudinary');
require('dotenv').config();

class uploadController {
  async uploadImage(req, res) {
    const { uri } = req.body;
    if (!uri) return res.status(401).json({ success: false, message: 'Thiếu uri' });
    try {
      const response = await cloudinary.uploader.upload(uri, {
        upload_preset: process.env.FILE_NAME_CLOUDINARY,
      });

      return res.json({ success: true, image: response });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: 'Internal Server Error' });
    }
  }
}

module.exports=new uploadController();
