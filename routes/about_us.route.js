const express = require('express')

const router = express.Router();

const AboutUsController = require("../controllers/about_us.controller")

router.get('/', AboutUsController.index)

module.exports = router