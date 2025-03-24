// modules/routes/authRoutes.js
const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

// POST đăng ký người dùng
router.post("/register", register);

// POST đăng nhập
router.post("/login", login);

module.exports = router;