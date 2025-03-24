// modules/routes/danhgiaRoutes.js
const express = require("express");
const {
    getDanhGia,
    getDanhGiaByID,
    createDanhGia,
    updateDanhGia,
    deleteDanhGia,
} = require("../controllers/danhgiaController");
const { authenticateToken, authorizeAdmin, authorizeKhachHang } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả đánh giá - Chỉ Admin
router.get("/getallDanhGia", authenticateToken, authorizeAdmin, getDanhGia);

// GET đánh giá theo ID - Khách hàng (chỉ xem của mình) hoặc Admin
router.get("/getDanhGia/:id", authenticateToken, getDanhGiaByID);

// POST tạo mới đánh giá - Khách hàng
router.post("/createDanhGia", authenticateToken, authorizeKhachHang, createDanhGia);

// PUT cập nhật đánh giá - Khách hàng (chỉ cập nhật của mình)
router.put("/updateDanhGia/:id", authenticateToken, authorizeKhachHang, updateDanhGia);

// DELETE xóa đánh giá - Khách hàng (chỉ xóa của mình)
router.delete("/deleteDanhGia/:id", authenticateToken, authorizeKhachHang, deleteDanhGia);

module.exports = router;