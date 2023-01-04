const googleService = require("../services/google.service")

const validate = require("../helpers/validation");

const uploadService = require("../services/upload.service")

const fs = require('fs');

const drive = googleService.config()

class UploaderController {
  async upload(req, res){
    const files = req.files

    if(files)
    {
      let urls = []
      for(let i =0 ; i < files.length ; i++) {
        if(validate.validateFile(files[i]))
        {
          try {
            const response = await drive.files.create({
              requestBody: {
                name:  files[i].originalname,
                mimeType: 'image/jpg',
              },
              media: {
                mimeType: 'image/jpg',
                body: fs.createReadStream(files[i].path),
              }
            });

              //get link file
            const link = await uploadService.getLink(response.data.id, drive)
            await uploadService.deleteTempFile(files[i])

            urls.push(link)
          } catch (error) {
            res.json({error: error})
          }
        }
        else
        {
          res.json({status:400, error:"invalid file"});
        }
      }

      res.json({status:200, urls: urls})
    }
    else
    {
      res.json({status:400, error:"invalid file"});
    }
  }
}

module.exports = new UploaderController();