const express = require("express")

const router = express.Router();

const SessionController = require("../../controllers/admin/session_controller")

router.get('/login', SessionController.login)
router.get('/register', SessionController.register)

module.exports = router