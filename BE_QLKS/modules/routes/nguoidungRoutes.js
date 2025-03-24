// modules/routes/nguoidungRoutes.js
const express = require("express");
const { getNguoiDung, getNguoiDungByID, createNguoiDung, updateNguoiDung, deleteNguoiDung } = require("../controllers/nguoidungController");
const { authenticateToken, authorizeAdmin } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả người dùng - Chỉ Admin
router.get("/getallNguoiDung", authenticateToken, authorizeAdmin, getNguoiDung);

// GET thông tin người dùng theo ID - Chỉ Admin
router.get("/getNguoiDung/:id", authenticateToken, authorizeAdmin, getNguoiDungByID);

// POST tạo mới người dùng - Chỉ Admin
router.post("/createNguoiDung", authenticateToken, authorizeAdmin, createNguoiDung);

// PUT cập nhật thông tin người dùng - Chỉ Admin
router.put("/updateNguoiDung/:id", authenticateToken, authorizeAdmin, updateNguoiDung);

// DELETE xóa người dùng - Chỉ Admin
router.delete("/deleteNguoiDung/:id", authenticateToken, authorizeAdmin, deleteNguoiDung);

module.exports = router;