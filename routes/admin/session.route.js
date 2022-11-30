import express from "express";

const router = express.Router();

import SessionController from "../../controllers/admin/session_controller.js"

router.get('/login', SessionController.login)
router.get('/register', SessionController.register)


export default router