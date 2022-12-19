const express = require("express")

const router = express.Router();

const SessionController = require("../../controllers/admin/session_controller")

router.get('/login', SessionController.login)
router.get('/register', SessionController.register)

router.post("/register", SessionController.register_create)
router.post("/login", SessionController.create)

router.get('/logout', SessionController.logout)

module.exports = router