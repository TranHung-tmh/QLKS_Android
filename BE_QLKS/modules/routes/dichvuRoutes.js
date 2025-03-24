// modules/routes/dichvuRoutes.js
const express = require("express");
const { getDichVu, getDichVuByID, createDichVu, updateDichVu, deleteDichVu } = require("../controllers/dichvuController");
const { authenticateToken, authorizeRoles } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả dịch vụ - Tất cả người dùng đã đăng nhập
router.get('/getallDV', authenticateToken, getDichVu);

// GET dịch vụ theo ID - Tất cả người dùng đã đăng nhập
router.get("/getDV/:id", authenticateToken, getDichVuByID);

// POST tạo mới dịch vụ - Admin hoặc Nhân viên
router.post("/createDV", authenticateToken, authorizeRoles(1, 2), createDichVu);

// PUT cập nhật dịch vụ - Admin hoặc Nhân viên
router.put('/updateDV/:id', authenticateToken, authorizeRoles(1, 2), updateDichVu);

// DELETE xóa dịch vụ - Admin hoặc Nhân viên
router.delete('/deleteDV/:id', authenticateToken, authorizeRoles(1, 2), deleteDichVu);

module.exports = router;