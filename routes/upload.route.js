const express = require('express')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const router = express.Router();

const UploadfileController = require("../controllers/uploader.controller");

router.post('/',  upload.single('file'), UploadfileController.upload)

module.exports = router