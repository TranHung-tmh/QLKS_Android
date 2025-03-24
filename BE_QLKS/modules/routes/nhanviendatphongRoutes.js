// modules/routes/nhanviendatphongRoutes.js
const express = require("express");
const { getNhanVienXuLyDatPhong, getNhanVienXuLyDatPhongByID, createNhanVienXuLyDatPhong, updateNhanVienXuLyDatPhong, deleteNhanVienXuLyDatPhong } = require("../controllers/nhanvienxulydatphongController");
const { authenticateToken, authorizeRoles } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả bản ghi nhân viên xử lý đặt phòng - Admin hoặc Nhân viên
router.get("/getallNhanVienXuLyDatPhong", authenticateToken, authorizeRoles(1, 2), getNhanVienXuLyDatPhong);

// GET thông tin nhân viên xử lý đặt phòng theo MaNV và MaDatPhong - Admin hoặc Nhân viên
router.get("/getNhanVienXuLyDatPhong/:maNV/:maDatPhong", authenticateToken, authorizeRoles(1, 2), getNhanVienXuLyDatPhongByID);

// POST tạo mới bản ghi nhân viên xử lý đặt phòng - Admin hoặc Nhân viên
router.post("/createNhanVienXuLyDatPhong", authenticateToken, authorizeRoles(1, 2), createNhanVienXuLyDatPhong);

// PUT cập nhật thông tin nhân viên xử lý đặt phòng - Admin hoặc Nhân viên
router.put("/updateNhanVienXuLyDatPhong/:maNV/:maDatPhong", authenticateToken, authorizeRoles(1, 2), updateNhanVienXuLyDatPhong);

// DELETE xóa bản ghi nhân viên xử lý đặt phòng - Admin hoặc Nhân viên
router.delete("/deleteNhanVienXuLyDatPhong/:maNV/:maDatPhong", authenticateToken, authorizeRoles(1, 2), deleteNhanVienXuLyDatPhong);

module.exports = router;