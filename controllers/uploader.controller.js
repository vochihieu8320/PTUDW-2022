const googleService = require("../services/google.service")

const validate = require("../helpers/validation");

const uploadService = require("../services/upload.service")

const fs = require('fs');

const drive = googleService.config()

class UploaderController {
  async upload(req, res){
    if(req.file)
    {
      if(validate.validateFile(req.file))
      {
        try {
          const response = await drive.files.create({
            requestBody: {
              name:  req.file.originalname,
              mimeType: 'image/jpg',
            },
            media: {
              mimeType: 'image/jpg',
              body: fs.createReadStream(req.file.path),
            }
          });

            //get link file
          const link = await uploadService.getLink(response.data.id, drive)
          await uploadService.deleteTempFile(req.file)
          res.json({url: link})
        } catch (error) {
          res.json({error: error})
        }
      }
      else
      {
        res.json({status:400, error:"invalid file"});
      }
    }
    else
    {
      res.json({status:400, error:"invalid file"});
    }
}
}

module.exports = new UploaderController();