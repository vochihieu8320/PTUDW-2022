const express = require('express')
const router = express.Router();

const AjaxController = require("../controllers/ajax.controller")

router.get('/products', AjaxController.products)

module.exports = router