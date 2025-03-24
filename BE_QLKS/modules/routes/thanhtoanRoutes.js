// modules/routes/thanhtoanRoutes.js
const express = require("express");
const { getThanhToan, getThanhToanByID, createThanhToan, updateThanhToan, deleteThanhToan } = require("../controllers/thanhtoanController");
const { authenticateToken, authorizeRoles } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả thanh toán - Chỉ Admin
router.get('/getallThanhToan', authenticateToken, authorizeRoles(1), getThanhToan);

// GET thanh toán theo ID - Admin hoặc Khách hàng (chỉ xem của mình)
router.get("/getThanhToan/:id", authenticateToken, authorizeRoles(1, 3), getThanhToanByID);

// POST tạo mới thanh toán - Admin hoặc Khách hàng
router.post("/createThanhToan", authenticateToken, authorizeRoles(1, 3), createThanhToan);

// PUT cập nhật thông tin thanh toán - Chỉ Admin
router.put('/updateThanhToan/:id', authenticateToken, authorizeRoles(1), updateThanhToan);

// DELETE xóa thanh toán - Chỉ Admin
router.delete('/deleteThanhToan/:id', authenticateToken, authorizeRoles(1), deleteThanhToan);

module.exports = router;