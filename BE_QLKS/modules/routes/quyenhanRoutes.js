// modules/routes/quyenhanRoutes.js
const express = require("express");
const { getQuyenHan, getQuyenHanByID, createQuyenHan, updateQuyenHan, deleteQuyenHan } = require("../controllers/quyenhanController");
const { authenticateToken, authorizeAdmin } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả quyền hạn - Chỉ Admin
router.get("/getallQuyenHan", authenticateToken, authorizeAdmin, getQuyenHan);

// GET thông tin quyền hạn theo ID - Chỉ Admin
router.get("/getQuyenHan/:id", authenticateToken, authorizeAdmin, getQuyenHanByID);

// POST tạo mới quyền hạn - Chỉ Admin
router.post("/createQuyenHan", authenticateToken, authorizeAdmin, createQuyenHan);

// PUT cập nhật thông tin quyền hạn - Chỉ Admin
router.put("/updateQuyenHan/:id", authenticateToken, authorizeAdmin, updateQuyenHan);

// DELETE xóa quyền hạn - Chỉ Admin
router.delete("/deleteQuyenHan/:id", authenticateToken, authorizeAdmin, deleteQuyenHan);

module.exports = router;