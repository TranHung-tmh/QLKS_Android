// modules/routes/thongkedoanhthuRoutes.js
const express = require("express");
const { getThongKeDoanhThu, getThongKeDoanhThuByID } = require("../controllers/thongkedoanhthuController");
const { authenticateToken, authorizeAdmin } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả thống kê doanh thu - Chỉ Admin
router.get("/getallThongKe", authenticateToken, authorizeAdmin, getThongKeDoanhThu);

// GET thống kê doanh thu theo ID - Chỉ Admin
router.get("/getThongKe/:id", authenticateToken, authorizeAdmin, getThongKeDoanhThuByID);

module.exports = router;