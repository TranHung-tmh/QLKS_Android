// modules/routes/datphongRoutes.js
const express = require("express");
const { getDatPhong, getDatPhongByID, createDatPhong, updateDatPhong, deleteDatPhong } = require("../controllers/datphongController");
const { authenticateToken, authorizeAdmin, authorizeKhachHang } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả các lượt đặt phòng - Chỉ Admin
router.get('/getallDatPhong', authenticateToken, authorizeAdmin, getDatPhong);

// GET thông tin đặt phòng theo ID - Khách hàng (chỉ xem của mình) hoặc Admin
router.get("/getDatPhong/:id", authenticateToken, getDatPhongByID);

// POST tạo mới lượt đặt phòng - Khách hàng
router.post("/createDatPhong", authenticateToken, authorizeKhachHang, createDatPhong);

// PUT cập nhật thông tin đặt phòng - Khách hàng (chỉ cập nhật của mình)
router.put('/updateDatPhong/:id', authenticateToken, authorizeKhachHang, updateDatPhong);

// DELETE xóa lượt đặt phòng - Khách hàng (chỉ xóa của mình)
router.delete('/deleteDatPhong/:id', authenticateToken, authorizeKhachHang, deleteDatPhong);

module.exports = router;