import express from "express";
import User from "../models/user.js";
import { createAccessToken, createRefreshToken } from "../utils/tokens.js";
import { registerController } from "../contollers/auth.js";

const router = express.Router();

// register
router.post("/register", registerController);

