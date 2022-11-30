import express from "express";

const router = express.Router();

import AboutUsController from "../controllers/about_us.controller.js";


router.get('/', AboutUsController.index)

export default router