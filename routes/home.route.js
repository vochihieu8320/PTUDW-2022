import express from "express";

const router = express.Router();

import HomeController from '../controllers/home.controller.js';

router.get('/', HomeController.index)

export default router