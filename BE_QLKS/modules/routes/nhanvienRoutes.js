// modules/routes/nhanvienRoutes.js
const express = require("express");
const { getNhanVien, getNhanVienByID, createNhanVien, updateNhanVien, deleteNhanVien } = require("../controllers/nhanvienController");
const { authenticateToken, authorizeAdmin } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả nhân viên - Chỉ Admin
router.get("/getallNhanVien", authenticateToken, authorizeAdmin, getNhanVien);

// GET thông tin nhân viên theo ID - Chỉ Admin
router.get("/getNhanVien/:id", authenticateToken, authorizeAdmin, getNhanVienByID);

// POST tạo mới nhân viên - Chỉ Admin
router.post("/createNhanVien", authenticateToken, authorizeAdmin, createNhanVien);

// PUT cập nhật thông tin nhân viên - Chỉ Admin
router.put("/updateNhanVien/:id", authenticateToken, authorizeAdmin, updateNhanVien);

// DELETE xóa nhân viên - Chỉ Admin
router.delete("/deleteNhanVien/:id", authenticateToken, authorizeAdmin, deleteNhanVien);

module.exports = router;