const express = require('express')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const router = express.Router();

const UploadfileController = require("../controllers/uploader.controller");

router.post('/',  upload.array('files', 4), UploadfileController.upload)

module.exports = router